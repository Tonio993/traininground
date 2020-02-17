import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AngularDraggableModule } from 'angular2-draggable';
import {FormsModule} from '@angular/forms';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GeneratedComponent } from './generated/generated.component';

import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard.service';

import { WindowRef } from './core/window-ref/window-ref.service';
import { ManagerComponent } from './manager/manager.component';
import { DraggableDotComponent } from './manager/draggable-dot/draggable-dot.component';
import { SvgManagerService } from './manager/svg-manager.service';
import { LoadTrackComponent } from './load-track/load-track.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneratedComponent,
    LoginComponent,
    ManagerComponent,
    DraggableDotComponent,
    LoadTrackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AngularDraggableModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    SharedModule
  ],
  providers: [
    AngularFirestore,
    AngularFireAuth,
    AuthService,
    AuthGuard,
    WindowRef,
    SvgManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
