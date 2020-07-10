import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclientesComponent } from "./addclientes/addclientes.component";
import { ClientesComponent } from "./clientes/clientes.component";

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'addclientes', component: AddclientesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}