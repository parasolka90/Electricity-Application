import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeterListComponent } from './meter-list/meter-list.component';
import { MeterCreateComponent } from './meter-create/meter-create.component'
import {MeterSummaryComponent} from "./meter-summary/meter-summary.component";
const routes: Routes = [
  {path: 'meter', component: MeterListComponent},
  {path: 'meter/create', component: MeterCreateComponent},
  {path: 'meter/edit/:id', component: MeterCreateComponent},
  {path: 'meter/summary/:id', component: MeterSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeterRoutingModule { }
