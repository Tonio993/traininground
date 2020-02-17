import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, TemplateRef } from '@angular/core';

import { AnimationSet } from './list.animations';

@Component({
  selector: 'tg-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [AnimationSet]
})
export class TgListComponent implements OnInit {
  @Input() label;
  @Input('search') searchAvailable : boolean;
  @Input() selectionMode: 'single' | 'multiple' = 'single';

  @Input() customListItemTemplate : TemplateRef<any>;

  @Output() selectionChange = new EventEmitter<any[]>();

  private searchPattern : string;
  private lastSelected : number;

  private _items : any[] = [];
  private _selection : any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  private getLabel(item : any, label : any): string {
    switch (typeof label) {
      case 'string':
        return item[label];
      case 'function':
        return label(item);
      default:
        return item;
    }
  }

  onListItemClick(event: MouseEvent, item : any) {
    if (this.selectionMode == 'single') {
      if (event.ctrlKey && this.selection.length != 0 && item == this.selection[0]) {
        this.selection = [];
      } else {
        this.selection = [item];
      }
    } else if (this.selectionMode == 'multiple') {
      if (!event.ctrlKey && !event.shiftKey) {
        this.selection = [item];
      } else if (!event.shiftKey) {
        const selectedIndex = this.selection.indexOf(item);
        if (selectedIndex == -1) {
          this.selection = [...this.selection, item];
        } else {
          this.selection = [...this.selection.slice(0, selectedIndex), ...this.selection.slice(selectedIndex+1)];
        }
      } else {
        const itemsFrom = this.items.indexOf(this.lastSelected);
        const itemsTo = this.items.indexOf(item);
        var newSelection = this.items.slice(itemsFrom <= itemsTo ? itemsFrom : itemsTo, itemsFrom <= itemsTo ? itemsTo+1 : itemsFrom+1);
        if (!event.ctrlKey) {
          this.selection = newSelection;
        } else {
          const uniqueValues = new Set([...this.selection, ...newSelection]);
          this.selection = Array.from(uniqueValues.values());
        }
      }
      if (!event.shiftKey) {
        this.lastSelected = item;
      }
    }
  }

  @Input()
  get items() {
    return this._items;
  }

  set items(value) {
    this._items = value;
  }

  @Input()
  get selection() {
    return this._selection;
  }

  set selection(value) {
    this._selection = value;
    this.selectionChange.emit(this._selection);
  }

}