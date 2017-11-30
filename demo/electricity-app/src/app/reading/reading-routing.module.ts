import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReadingListComponent } from './reading-list/reading-list.component';
import { ReadingCreateComponent } from './reading-create/reading-create.component';

const routes: Routes = [
  {path: 'reading', component: ReadingListComponent},
  {path: 'reading/create', component: ReadingCreateComponent},
  {path: 'reading/edit/:id', component: ReadingCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadingRoutingModule { }
