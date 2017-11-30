import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeterRoutingModule } from './meter-routing.module';
import { MeterListComponent } from './meter-list/meter-list.component';
import { MeterCreateComponent } from './meter-create/meter-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeterSummaryComponent } from './meter-summary/meter-summary.component';


@NgModule({
  imports: [
    CommonModule,
    MeterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MeterListComponent, MeterCreateComponent, MeterSummaryComponent]
})
export class MeterModule { }
