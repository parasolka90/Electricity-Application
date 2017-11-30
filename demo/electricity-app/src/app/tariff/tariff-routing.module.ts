import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TariffListComponent} from "./tariff-list/tariff-list.component";
import {TariffCreateComponent} from "./tariff-create/tariff-create.component";

const routes: Routes = [
  {path: 'tariff', component: TariffListComponent},
  {path: 'tariff/create', component: TariffCreateComponent},
  {path: 'tariff/edit/:id', component: TariffCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TariffRoutingModule { }
