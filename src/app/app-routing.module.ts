import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LessonsComponent} from "./lessons/lessons.component";

const routes: Routes = [
  { path: '', redirectTo: '/lessons', pathMatch: 'full'},
  { path: 'lessons', component: LessonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
