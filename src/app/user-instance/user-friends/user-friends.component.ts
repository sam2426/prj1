import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'node_modules/ngx-toastr';
import { CookieService } from 'node_modules/ngx-cookie-service';
import { AppService } from '../../app.service';
import { Router } from 'node_modules/@angular/router';

@Component({
  selector: 'app-user-friends',
  templateUrl: './user-friends.component.html',
  styleUrls: ['./user-friends.component.css']
})
export class UserFriendsComponent implements OnInit {

  public userList:any=[];

  constructor(
    public appService:AppService,
    public toastr:ToastrService,
    public cookies:CookieService,
    public router:Router,
  ) { }

  ngOnInit() {
    this.getFriendList();
  }

  public getFriendList:any=()=>{
    this.appService.friendList().subscribe((apiResponse)=>{
      if(apiResponse.status===200){
        this.userList=apiResponse.data
      }      
      console.log(this.userList);
    })
  }

}