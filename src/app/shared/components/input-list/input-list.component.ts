import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tg-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.scss']
})
export class TgInputListComponent implements OnInit {
  @Input() inputList: string[] = [];

  constructor() { }

  ngOnInit() {
    if (this.inputList.length == 0 || this.inputList[this.inputList.length-1] != '') {
      this.inputList.push('');
    }
  }

  onNewValueKeyDown(value) {
    console.log(JSON.stringify(this.inputList));
    if (this.inputList[this.inputList.length-1] != '') {
      this.inputList.push('');
    }
  }

  onDelete(index: number) {
    console.log(this.inputList);
    console.log(index);
    this.inputList.splice(index, 1);
    console.log(this.inputList);
  }

}