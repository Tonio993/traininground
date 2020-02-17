import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { AnimationSet } from './dropdown.animations';

@Component({
  selector: 'tg-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [AnimationSet]
})
export class TgDropdownComponent implements OnInit {
  @Input() items : any[] = [];
  @Input() label;
  @Input() open : boolean = false;
  @Input() placeholder : string = 'Select...';
  @Input() unselectedLabel : string = '';
  @Input() dropdownHeight : string = '200px';

  @Output() selectedChange = new EventEmitter<any>();

  @ViewChild('dropdownContainer') public dropdownContainer : ElementRef;
  @ViewChildren("dropdownItem") public dropdownItems : QueryList<ElementRef>;

  private _selected : any;

  constructor() {}

  ngOnInit() {}

  onItemClick(item) {
    if (this.open) {
      this.selected = item;
    }
  }

  onBlur() {
    this.open = false;
  }

  onKeyDown(event : KeyboardEvent) {
    var index = this.items.indexOf(this.selected);
    switch (event.key) {
      case 'ArrowUp':
        this.open = true;
        event.preventDefault();
        if (index > 0) {
          index = Math.max(0, index - 1);
          this.selected = this.items[index];
        } else {
          this.selected = null;
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.open = true;
        index = Math.min(this.items.length - 1, index + 1);
        this.selected = this.items[index];
        break;
      case 'Enter':
        this.open = false;
        break;
    }
    this.scrollToItem(index);
  }

  onAnimationDone() {
    this.scrollToItem(this.items.indexOf(this.selected));
  }

  private getLabel(item : any, label? : any): string {
    if (!label) {
      label = this.label;
    }
    switch (typeof label) {
      case 'string':
        return item[label];
      case 'function':
        return label(item);
      default:
        return item;
    }
  }


  private scrollToItem(index : number) {
    if (index != -1) {
      const itemY = this.dropdownItems.toArray()[index].nativeElement.offsetTop;
      const itemHeight = this.dropdownItems.toArray()[index].nativeElement.offsetHeight;
      const containerHeight = this.dropdownContainer.nativeElement.offsetHeight;
      this.dropdownContainer.nativeElement.scroll({top: itemY - (containerHeight - itemHeight) /2, behavior: 'smooth'});
    } else {
      this.dropdownContainer.nativeElement.scrollTop = 0;
    }
  }

  @Input()
  get selected() {
    return this._selected;
  }

  set selected(value) {
    this._selected = value;
    this.selectedChange.emit(this._selected);
  }

}