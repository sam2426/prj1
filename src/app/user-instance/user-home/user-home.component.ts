import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'node_modules/ngx-toastr';
import { CookieService } from 'node_modules/ngx-cookie-service';
import { AppService } from '../../app.service';
import { Router, ActivatedRoute } from 'node_modules/@angular/router';
// import {MatCardModule} from '@angular/material'

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  public currentUser;
  public userData={};
  public loggedInId='';
  public userId='';
  // public authToken:any;
  public userInfo:any;
 
  constructor(
    public appService:AppService,
    public toastr:ToastrService,
    public cookies:CookieService,
    public _route: ActivatedRoute,
    public router:Router,
  ) {
    
    
    // this.receiverId=cookies.get('receiverId');
    // this.receiverName=cookies.get('receiverName');
   }

  ngOnInit() {
    
    // this.authToken=this.cookies.get('authToken');
    this.loggedInId=this.cookies.get('userId');
    this.userInfo=this.appService.getUserInfoFromLocalStorage();
    //getting the user id from the route, here snapshot method didn't work so used observable to get the 
    //refreshed user id dynamically. snapshot is kinf of static
     this._route.paramMap.subscribe((params)=>{
      this.userId = params.get('userId');
      // console.log('user home called'+params.get('userId'));
      this.getProfile(this.userId);
     })
  
  }

  public getProfile:any=(userId)=>{
    this.appService.getSingleUser(userId).subscribe((apiResponse)=>{
      console.log(apiResponse);
      if(apiResponse.status===200){
        this.userData=apiResponse.data;
      }else{
        this.toastr.warning(apiResponse.message);
      }
    })
  }
    
}
