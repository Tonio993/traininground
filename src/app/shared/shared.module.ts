import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from './components/card/card.module';

import { TableComponent } from './components/table/table.component';
import { TgInputComponent } from './components/input/input.component';
import { TgInputListComponent } from './components/input-list/input-list.component';
import { TgCheckboxComponent } from './components/checkbox/checkbox.component';
import { TgListComponent } from './components/list/list.component';
import { TgDropdownComponent } from './components/dropdown/dropdown.component';
import { ButtonComponent } from './components/button/button.component';

import { BackgroundDirective } from './directives/background/background.directive';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ColorDirective } from './components/button/color.directive';
import { MatchPipe } from './pipes/match.pipe';
import { FirestoreService } from './services/firestore.service';
import { ScrollbarDirective } from './directives/scrollbar/scrollbar.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CardModule
  ],
  declarations: [
    TableComponent,
    TgInputComponent,
    TgInputListComponent,
    TgCheckboxComponent,
    TgListComponent,
    TgDropdownComponent,
    ButtonComponent,
    BackgroundDirective,
    HighlightDirective,
    ColorDirective,
    MatchPipe,
    ScrollbarDirective,
  ],
  exports: [
    CardModule,
    TableComponent,
    TgInputComponent,
    TgInputListComponent,
    TgCheckboxComponent,
    TgListComponent,
    TgDropdownComponent,
    ButtonComponent,
    BackgroundDirective,
    HighlightDirective,
    MatchPipe
  ],
  providers: [FirestoreService]
})
export class SharedModule { }