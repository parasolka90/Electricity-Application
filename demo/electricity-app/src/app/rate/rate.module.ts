import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RateRoutingModule } from './rate-routing.module';
import { RateListComponent } from './rate-list/rate-list.component';
import { RateCreateComponent } from './rate-create/rate-create.component';

@NgModule({
  imports: [
    CommonModule,
    RateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RateListComponent, RateCreateComponent]
})
export class RateModule { }
