import { trigger, state, style, transition, animate, query, stagger, animateChild } from '@angular/animations';

export const AnimationSet = [
  trigger('items', [
    transition(':enter', [
      style({ transform: 'scaleY(0)', height: 0, opacity: 0 }),  // initial
      animate('0.3s ease-out', 
        style({ transform: '*', height: '*', opacity: 1 }))  // final
    ]),
    transition(':leave', [
      style({ transform: '*', height: '*', opacity: 1 }),  // initial
      animate('0.3s ease-out', 
        style({ transform: 'scaleY(0)', height: 0, opacity: 0 }))  // final
    ])
  ])
];