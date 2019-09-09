import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'node_modules/ngx-toastr';
import { CookieService } from 'node_modules/ngx-cookie-service';
import { AppService } from '../../app.service';
import { Router } from 'node_modules/@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(
    public appService:AppService,
    public toastr:ToastrService,
    public cookies:CookieService,
    public router:Router,
  ) {
    this.receiverId=cookies.get('receiverId');
    this.receiverName=cookies.get('receiverName');
   }

  ngOnInit() {
    this.authToken=this.cookies.get('authToken');
    this.userInfo=this.appService.getUserInfoFromLocalStorage();
  }

  public authToken:any;
  public userInfo:any;
  public receiverId:any;
  public receiverName:any;

}
