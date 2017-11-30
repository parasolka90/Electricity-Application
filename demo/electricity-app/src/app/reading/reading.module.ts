import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadingRoutingModule } from './reading-routing.module';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { ReadingCreateComponent } from './reading-create/reading-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReadingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ReadingListComponent, ReadingCreateComponent]
})
export class ReadingModule { }
