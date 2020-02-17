import { Component, OnInit, Input } from '@angular/core';

import { NavbarMenuitem } from './navbar-menuitem.interface';

@Component({
  selector: 'app-navbar-menuitem',
  templateUrl: './navbar-menuitem.component.html',
  styleUrls: ['./navbar-menuitem.component.scss']
})
export class NavbarMenuitemComponent implements OnInit {
  @Input() menuitem: NavbarMenuitem;
  @Input() isBrand: boolean;

  constructor() { }

  ngOnInit() {
  }
}