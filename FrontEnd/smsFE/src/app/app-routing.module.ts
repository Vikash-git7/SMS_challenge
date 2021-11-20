import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowTableComponent} from './show-table/show-table.component'
const routes: Routes = [
  { path : 'table' ,component : ShowTableComponent },
  { path : '' ,component : ShowTableComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
