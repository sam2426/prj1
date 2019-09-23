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

  public userInfo:any;
  public headerName:String;
  public userId:String='';
  public todoList:any=[];
  public isTodoHeaderPresent:Boolean=false;
  public userTodoHeaders:any=[];
  public pageValue: number = 0;
  public selectedTodoName:String;
  public selectedTodoId:String;

  constructor(
    public appService:AppService,
    public todoService:TodoService,
    public toastr:ToastrService,
    public cookies:CookieService,
    public router:Router,
  ) { }

  ngOnInit() {

    this.userInfo=this.appService.getUserInfoFromLocalStorage();
    this.userId=this.cookies.get('userId');
    this.getUserTodoHeaders(this.userId);
    // this.getAllTodoList(this.userId);

  }

  public getUserTodoHeaders:any=(userId)=>{
    this.todoService.getUserTodoHeaders('7kCiOnhg').subscribe((apiResponse)=>{
      if(apiResponse.status===200){
        // console.log(apiResponse.data);
        this.isTodoHeaderPresent=true;
        for(let x of apiResponse.data){
          let temp={
                    'todoId':x.todoId,
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

  public addHeader:any=()=>{
    let data={
      message:this.headerName,
      user:this.userId
    }
    this.todoService.initiateHeader(data).subscribe((apiResponse)=>{
      if(apiResponse.status===200){
        this.getUserTodoHeaders(this.userId);
        console.log(apiResponse.data);
      }else{
        console.log('header not created');
      }
    })
  }

  public todoSelected:any=(todoId,todoBody)=>{
    console.log("getting data of "+todoId);
    this.selectedTodoId = todoId;
    this.selectedTodoName = todoBody;
    this.todoList = [];
    this.pageValue = 0;
    // let chatDetails = {
    //   userId: this.userInfo.userId,
    //   senderId: id
    // }
    // this.socket.markChatAsSeen(chatDetails);
    this.getPreviousTodoData();
  }

  public getPreviousTodoData:any=()=>{
    // let previousData=(this.todoList.length>0 ? this.todoList.slice() : [] );
    // this.todoService.getChat(this.userInfo.userId,this.receiverId,this.pageValue*10).subscribe((apiResponse)=>{
      this.todoService.todoList("hd-z7yHBDGq").subscribe((apiResponse)=>{
      console.log(apiResponse);
      if(apiResponse.status===200){
        this.todoList=apiResponse.data.childNodes;
      }else{
        // this.messageList=previousData;
        this.toastr.warning('No Messages Availbale');
      }
    },(err) => {
      this.toastr.error('some error occured')
    });
  }// end get previous chat with any user


  public getAllTodoList:any=(userId)=>{
    this.todoService.todoList("hd-fTW-5Eqc").subscribe((apiResponse)=>{
      if(apiResponse.status===200){
        this.todoList=apiResponse.data.childNodes;
      }
      console.log(this.todoList);
    })
  }
}
