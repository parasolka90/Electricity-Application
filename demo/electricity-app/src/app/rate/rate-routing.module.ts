import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RateListComponent } from './rate-list/rate-list.component';
import { RateCreateComponent } from './rate-create/rate-create.component';

const routes: Routes = [
  {path: 'rate', component: RateListComponent},
  {path: 'rate/create', component: RateCreateComponent},
  {path: 'rate/edit/:id', component: RateCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RateRoutingModule { }
