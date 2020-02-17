import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { FirestoreService } from '../shared/services/firestore.service';

@Component({
  selector: 'app-load-track',
  templateUrl: './load-track.component.html',
  styleUrls: ['./load-track.component.scss']
})
export class LoadTrackComponent implements OnInit {
  counter = 1;
  insertValue = '';

  selected;
  item : Subscription;

  items = [];

  selection : any[] = [];

  constructor(private firestore : FirestoreService) { }

  ngOnInit() {
    this.firestore.load('firestore', 'load-track').subscribe((data) => {
      try {
        this.items =  data != null && data.items instanceof Array ? data.items : [];
      } catch(exc) {
        this.items = [];
      }
    });
  }

  addItem(label) {
    const item = label;
    this.items.push(item);
    this.firestore.save('firestore', 'load-track', {items : this.items});
  }

  onInsert(label) {
    this.addItem(label);
  }

  onDelete() {
    this.items = this.items.filter((item) => !this.selection.includes(item));
    this.firestore.save('firestore', 'load-track', {items : this.items});
    this.selection = [];
  }
 
}