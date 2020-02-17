import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tg-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: [
    '../card.module.scss',
    './card-header.component.scss'
  ]
})
export class CardHeaderComponent implements OnInit {
  @Input() private headerTitle: String

  constructor() { }

  ngOnInit() {
  }

}