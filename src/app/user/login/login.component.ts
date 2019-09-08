import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:any;
  public password:any;

  constructor(
    public toastr:ToastrService,
    public appService:AppService,
    public router:Router,
  ) {}

  public goToUser(){
    this.router.navigate(['/profile']);
  }

  public forgetPassword(){
    console.log("forgot");
    this.router.navigate(['/forget_password']);
  }

  public logInFunction: any=()=> {
    if(!this.password){
      this.toastr.warning('enter password');
    }else if(!this.email){
      this.toastr.warning('enter email');
    }else{
      let data={
        email:this.email,
        password:this.password
      }
      console.log(data);

      this.appService.loginFunction(data).subscribe((apiResponse)=>{
        console.log(apiResponse);

        if(apiResponse.status===200){
          this.toastr.success('Logged in Successfully');
          this.goToUser();
        }
      })
    }    
  }

  ngOnInit() {
  }
}
