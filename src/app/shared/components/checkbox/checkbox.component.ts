import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tg-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class TgCheckboxComponent implements OnInit {
  @Input() checked: {value:boolean} = {value: false};
  @Input() label: string;
  
  constructor() { }

  ngOnInit() {
  }

}