import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodRoutingModule } from './period-routing.module';
import { PeriodListComponent } from './period-list/period-list.component';
import { PeriodCreateComponent } from './period-create/period-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PeriodRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PeriodListComponent, PeriodCreateComponent]
})
export class PeriodModule { }
