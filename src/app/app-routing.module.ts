import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth-guard.service'

import { HomeComponent } from './home/home.component';
import { GeneratedComponent } from './generated/generated.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { LoadTrackComponent } from './load-track/load-track.component';

const routes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'exercises', loadChildren: "./exercises/exercises.module#ExercisesModule"},
    {path: 'login', component: LoginComponent},
    {path: 'generated', component: GeneratedComponent, canActivate: [AuthGuard]},
    {path: 'manager', component: ManagerComponent, canActivate: [AuthGuard]},
    {path: 'load-track', component: LoadTrackComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }