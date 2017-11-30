import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodListComponent } from './period-list/period-list.component';
import { PeriodCreateComponent } from './period-create/period-create.component';


const routes: Routes = [
  {path: 'period', component: PeriodListComponent},
  {path: 'period/create', component: PeriodCreateComponent},
  {path: 'period/edit/:id', component: PeriodCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodRoutingModule { }
