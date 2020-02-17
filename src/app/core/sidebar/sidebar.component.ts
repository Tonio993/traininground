import { Component, OnInit } from '@angular/core';

import { SidebarAnimations } from './sidebar.animations';
import { SidebarItem } from './sidebar-item/sidebar-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [SidebarAnimations]
})
export class SidebarComponent implements OnInit {
  itemList: SidebarItem[] = [
    {label: 'Home', link: 'home', exactRoute: true},
    {label: 'Login', link: '/login'},
    {label: 'Tabella', link: 'table'},
    {label: 'Card', link: 'card'},
    {label: 'Sondaggi', link: 'survey'},
    {label: 'Lista', link: 'list'},
    {label: 'Firestore', link: 'firestore'},
  ];

  animationState = 'inactive';

  currentItem: SidebarItem = {label: 'Home', link: 'home', exactRoute: true};

  constructor() { }

  ngOnInit() {
  }
}