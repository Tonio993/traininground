import { trigger, state, style, transition, animate, query, stagger, animateChild } from '@angular/animations';

export const AnimationSet = [
  trigger('items', [
    transition(':enter', [
      style({ transform: 'scaleY(0)', height: 0, opacity: 0 }),  // initial
      animate('0.5s cubic-bezier(0.655, 1.65, 0.75, 0.75)', 
        style({ transform: 'scaleY(1)', height: '*', opacity: 1 }))  // final
    ]),
    transition(':leave', [
      style({ transform: 'scaleY(1)', height: '*', opacity: 1 }),  // initial
      animate('0.5s cubic-bezier(0.5, -0.25, 0.9, 0.75)', 
        style({ transform: 'scaleY(0)', height: 0, opacity: 0 }))  // final
    ])
  ])
];