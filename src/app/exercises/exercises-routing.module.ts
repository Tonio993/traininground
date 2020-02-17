import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth-guard.service'

import { ExercisesComponent } from './exercises.component';
import { ExercisesHomeComponent } from './exercises-home/exercises-home.component';
import { ExercisesTableComponent } from './exercises-table/exercises-table.component';
import { ExercisesCardComponent } from './exercises-card/exercises-card.component';
import { ExercisesSurveyComponent } from './exercises-survey/exercises-survey.component';
import { ExercisesDraggableListComponent } from './exercises-draggable-list/exercises-draggable-list.component';
import { ExercisesFirestoreComponent } from './exercises-firestore/exercises-firestore.component';

const routes: Routes = [
  {path: '', component: ExercisesComponent, canActivate: [AuthGuard], children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: ExercisesHomeComponent},
    {path: 'table', component: ExercisesTableComponent},
    {path: 'card', component: ExercisesCardComponent},
    {path: 'survey', component: ExercisesSurveyComponent},
    {path: 'list', component: ExercisesDraggableListComponent},
    {path: 'firestore', component: ExercisesFirestoreComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }