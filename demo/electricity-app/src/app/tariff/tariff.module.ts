import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TariffRoutingModule } from './tariff-routing.module';
import { TariffListComponent } from './tariff-list/tariff-list.component';
import { TariffCreateComponent } from './tariff-create/tariff-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    TariffRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TariffListComponent, TariffCreateComponent]
})
export class TariffModule { }
