import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-body-tree',
  templateUrl: './todo-body-tree.component.html',
  styleUrls: ['./todo-body-tree.component.css']
})
export class TodoBodyTreeComponent implements OnInit {

  @Input() todoList:any;
  
  constructor() { }

  ngOnInit() {
  }

}
