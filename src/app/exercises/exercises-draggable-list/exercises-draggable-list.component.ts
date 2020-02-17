import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger, animateChild } from '@angular/animations';

export const AnimationSet = [
  trigger('items', [
    transition(':enter', [
      style({ transform: 'scale(0)' }),  // initial
      animate('1s', 
        style({ transform: 'scale(1)' }))  // final
    ])
  ])
];

@Component({
  selector: 'app-exercises-draggable-list',
  templateUrl: './exercises-draggable-list.component.html',
  styleUrls: ['./exercises-draggable-list.component.scss'],
  animations: [AnimationSet]
})
export class ExercisesDraggableListComponent implements OnInit {
  items = [1];
  startX: number;
  startY: number;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.items.push(this.items.length+1)
  }

}