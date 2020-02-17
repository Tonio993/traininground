import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { ExercisesComponent } from './exercises.component';
import { ExercisesHomeComponent } from './exercises-home/exercises-home.component';
import { ExercisesTableComponent } from './exercises-table/exercises-table.component';
import { ExercisesSurveyComponent } from './exercises-survey/exercises-survey.component';
import { SurveyItemComponent } from './exercises-survey/survey-item/survey-item.component';

import { ExercisesDraggableListComponent } from './exercises-draggable-list/exercises-draggable-list.component';
import { ListItemComponent } from './exercises-draggable-list/list-item/list-item.component';
import { SurveyItemOpenComponent } from './exercises-survey/survey-item-open/survey-item-open.component';
import { ExercisesCardComponent } from './exercises-card/exercises-card.component';

import { ExercisesFirestoreComponent } from './exercises-firestore/exercises-firestore.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ExercisesRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule
  ],
  declarations: [
    ExercisesComponent,
    ExercisesHomeComponent,
    ExercisesTableComponent,
    ExercisesSurveyComponent,
    SurveyItemComponent,
    ExercisesDraggableListComponent,
    ListItemComponent,
    SurveyItemOpenComponent,
    ExercisesCardComponent,
    ExercisesFirestoreComponent,
 ]
})
export class ExercisesModule { }