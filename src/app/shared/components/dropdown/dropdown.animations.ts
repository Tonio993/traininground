import { trigger, state, style, transition, animate, query, stagger, sequence, animateChild } from '@angular/animations';

export const AnimationSet = [
  trigger('item', [
    state('open', style({ height: '*', minHeight: '*', paddingTop: '*', paddingBottom: '*', opacity: '*'})),
    state('closed', style({ height: '0', minHeight: '0', paddingTop: '0', paddingBottom: '0', opacity: '0', display: 'none'})),
    transition('open => closed', [
        animate('0.2s')
    ]),
    transition('closed => open', [
        style({display: 'block'}),
        animate('0.2s')
    ])
  ])
];