import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoBodyTreeComponent } from './todo-body-tree/todo-body-tree.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [TodoBodyTreeComponent],
  imports: [
    CommonModule
  ],
  exports:[TodoBodyTreeComponent]
})
export class TodoBodyModule { }
