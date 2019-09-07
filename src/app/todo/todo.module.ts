import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoMultiComponent } from './todo-multi/todo-multi.component';
import { TodoSingleComponent } from './todo-single/todo-single.component';

const routes: Routes=[
  {path:'mytodo', component:TodoSingleComponent},
  {path:'alltodo',component:TodoMultiComponent},
]

@NgModule({
  declarations: [TodoMultiComponent, TodoSingleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoModule { }
