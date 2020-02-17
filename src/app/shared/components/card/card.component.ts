import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';

import { CardHeaderComponent } from './card-header/card-header.component';

@Component({
  selector: 'tg-card',
  templateUrl: './card.component.html',
  styleUrls: [
    './card.module.scss',
    './card.component.scss'
  ]
})
export class CardComponent implements OnInit {
  constructor() { }

  ngOnInit() {}

}