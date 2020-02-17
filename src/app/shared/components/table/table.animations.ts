import { trigger, state, style, transition, animate } from '@angular/animations';

export const TableAnimations = [
  trigger('rowHighlight', [
    state('active', style({
      width: '15rem'
    })),
    state('inactive', style({
      width: '3rem'
    })),
    transition('active <=> inactive', animate('300ms ease-out'))
  ])
];