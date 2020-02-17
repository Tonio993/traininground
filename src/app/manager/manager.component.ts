import { Component, OnInit } from '@angular/core';

import { Point } from './draggable-dot/point';

import { SvgManagerService } from './svg-manager.service';
import { FirestoreService } from '../shared/services/firestore.service';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  dots : Point[] = [];

  constructor(private svg : SvgManagerService, private fire : FirestoreService, private firestore: AngularFirestore) {}

  ngOnInit() {
    // this.fire.load('firestore', 'svg-test').subscribe((value) => {
    //   this.dots = value.dots ? Object.keys(value.dots).map((key) => ({id : key, ...value.dots[key]})) : [];
    // });

    this.firestore.collection('firestore').doc('svg-test').collection('dots').get().subscribe((data) => this.dots = data.docs.map(doc => ({id: doc.id, ...doc.data()})));
  }

  onMousedown(event : MouseEvent) {
  }

  onMouseup(event : MouseEvent) {
    const point = this.svg.getSelected();
    if (point) {
      this.firestore.doc('firestore/svg-test/dots/' + point.id).update({x : point.x, y : point.y});
    }
    this.svg.clearSelection();
  }

  onMousemove(event : MouseEvent) {
    this.svg.moveSelected(event);
  }

  onMouseleave(event : MouseEvent) {
    this.svg.clearSelection();
  }

  onDoubleClick(event : MouseEvent) {
    this.fire.load('firestore', 'svg-test').subscribe((value) => {
      const newId = value.nextId ? value.nextId : 0;
      const newDot = {id: newId, x : event.offsetX, y : event.offsetY};
      this.dots.push(newDot);
      this.fire.update('firestore', 'svg-test', {nextId: newId + 1});
      this.firestore.doc('firestore/svg-test/dots/' + newId).set(newDot);
    })
  }

  onDelete(id : number) {
    this.dots = this.dots.filter(item => item.id != id);
    this.firestore.doc('firestore/svg-test/dots/' + id).delete();
  }

}