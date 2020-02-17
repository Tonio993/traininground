import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMenuitemComponent } from './navbar/navbar-menuitem/navbar-menuitem.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { NavbarService } from './navbar/navbar.service';
import { WindowRef } from './window-ref/window-ref.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    NavbarMenuitemComponent,
    SidebarComponent,
    SidebarItemComponent
  ],
  exports: [
    NavbarComponent,
    NavbarMenuitemComponent,
    SidebarComponent,
    SidebarItemComponent
  ],
  providers: [NavbarService]
})
export class CoreModule { }