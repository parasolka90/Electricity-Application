import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';

const routes: Routes = [{path: 'client', component: ClientListComponent},
  {path: 'client/create', component: ClientCreateComponent},
  {path: 'client/edit/:id', component: ClientDeleteComponent},
  {path: 'client/delete/:id', component: ClientDeleteComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
