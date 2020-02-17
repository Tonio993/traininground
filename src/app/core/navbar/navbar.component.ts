import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { NavbarService } from './navbar.service';
import { NavbarMenuitem } from './navbar-menuitem/navbar-menuitem.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  brand: NavbarMenuitem = {label: 'TrainingGround', link:''};
  menuitemList: NavbarMenuitem[] = [
    {label: 'Exercises', link: 'exercises'},
    {label: 'TFINB', link: 'generated'},
    {label: 'Manager', link: 'manager'},
    {label: 'Load Track', link: 'load-track'}
  ]

  layoutChanges;

  constructor(private settings: NavbarService, bpo: BreakpointObserver) {
    this.layoutChanges = bpo.observe([
  '(max-width : 500px)'
]);
   }

  ngOnInit() { }

}
