import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.scss']
})
export class SurveyItemComponent implements OnInit {
  @Input() title: string;
  @Input() question: string;
  @Input() answers: string[];
  @Input() openAnswer: {value: boolean};

  @Output() delete = new EventEmitter();

  constructor() {}

  ngOnInit() {
    if (!this.title) this.title = '';
    if (!this.question) this.question = '';
    if (!this.answers) this.answers = [''];

    console.log(this.answers);
  }

}