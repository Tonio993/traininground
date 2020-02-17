import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector : 'app-exercises-firestore',
  templateUrl : './exercises-firestore.component.html',
  styleUrls : ['./exercises-firestore.component.scss']
})
export class ExercisesFirestoreComponent implements OnInit {
  inputText = "";

  constructor(private af: AngularFirestore) {}

  ngOnInit() {
    this.loadValue();
  }

  loadValue() {
    this.af.collection('firestore').doc('test')
      .valueChanges()
      .take(1)
      .map(data => {
        console.log(data);
        return data;
      })
      .subscribe(data => {this.inputText = data.value});
  }

  onSave() {
    console.log(this.inputText);
    this.af.collection('firestore').doc('test').set({value : this.inputText});
  }

  onLoad() {
    this.loadValue();
  }

}