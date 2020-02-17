import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { SurveyItem } from './survey-item/survey-item';
import { AnimationSet } from './exercises-survey.animations';  

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-exercises-survey',
  templateUrl: './exercises-survey.component.html',
  styleUrls: ['./exercises-survey.component.scss'],
  animations: [AnimationSet]
})
export class ExercisesSurveyComponent implements OnInit {
  questionList = [];
  values;

  constructor(private af: AngularFirestore) { }

  ngOnInit() {
    this.af.collection('survey').doc('surveyList')
      .valueChanges()
      .take(1)
      .map(data => {
        console.log(data);
        var dataList = [];
        if (data) {
          console.log(data);
          Object.values(data).forEach(value => dataList.push(value))
        }
        return dataList;
      })
      .subscribe(data => {this.questionList = data? data : []});
  }

  onQuestionInsert(index: number) {
    this.questionList.splice(index, 0, {question:'', openAnswer:{value: false}, answers:[]});
    console.log(this.questionList);
  }

  onQuestionDelete(index: number) {
    this.questionList.splice(index, 1);
  }

  onSave() {
    console.log(this.questionList);
    this.af.collection('survey').doc('surveyList').set({...this.questionList});
  }

}