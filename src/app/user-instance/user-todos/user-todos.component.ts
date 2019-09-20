import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { AppService } from '../../app.service';
import { TodoService } from './../../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.css']
})
export class UserTodosComponent implements OnInit {


  public userId:String='';
  public todoList:any[];
  public isTodoHeaderPresent:Boolean=false;
  public userTodoHeaders:any[];

  constructor(
    public appService:AppService,
    public todoService:TodoService,
    public toastr:ToastrService,
    public cookies:CookieService,
    public router:Router,
  ) { }

  ngOnInit() {

    this.userId=this.cookies.get('userId');
    this.getUserTodoHeaders(this.userId);
    this.getAllTodoList(this.userId);

  }

  public getUserTodoHeaders:any=(userId)=>{
    this.todoService.getUserTodoHeaders(userId).subscribe((apiResponse)=>{
      if(apiResponse===200){
        this.isTodoHeaderPresent=true;
        for(let x of apiResponse.data){
          let temp={'todoId':x.todoId,
                    'todoBody':x.todoBody,
                  };
                  this.userTodoHeaders.push(temp);
        }
        // this.userTodoHeaders=apiResponse.data;
        console.log(this.userTodoHeaders);
      }else{
        this.isTodoHeaderPresent=false;
      }
    })
  }

  public getAllTodoList:any=(userId)=>{
    this.todoService.todoList("hd-SIiAHiVT").subscribe((apiResponse)=>{
      if(apiResponse.status===200){
        this.todoList=apiResponse.data.childNodes;
      }
      console.log(this.todoList);
    })
  }


}
