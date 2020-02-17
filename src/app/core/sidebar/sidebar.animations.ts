import { trigger, state, style, transition, animate, sequence, query, animateChild, group } from '@angular/animations';

export const SidebarAnimations = [
  trigger('sidebarExpand', [
    state('active', style({
      width: '15rem'
    })),
    state('inactive', style({
      width: '3rem'
    })),
    transition('active <=> inactive', group([
      query('@sidebarFade', [animateChild()]),
      animate('300ms ease-out')
    ]))
  ]),
  trigger('sidebarFade', [
    state('active', style({
      opacity: 1
    })),
    state('inactive', style({
      display: 'none',
      opacity: 0
    })),
    transition('active <=> inactive', animate('300ms'))
    // transition('inactive => active', sequence([animate('300ms')]))
  ])
];