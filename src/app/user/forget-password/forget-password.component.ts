import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public email:any;
  public otp:any;
  public password:any;

  constructor(
    public appService: AppService,
    public toastr:ToastrService,
    public router:Router,
  ) { }

  ngOnInit() {
  }

  public sendValidator:any=()=>{
    let data={
      email:this.email
    }

    this.appService.forgetPassword(data).subscribe((apiResponse)=>{
      console.log(apiResponse);
      if(apiResponse.status===200){
        this.toastr.success(apiResponse.message);
      }
      else{
        this.toastr.error(apiResponse.message);
      }
    })
  }

  public goToLogin(){
    this.router.navigate(['/login']);
  }

  public updatePasswordFunction:any=()=>{
    let data={
      email:this.email,
      otp:this.otp,
      password:this.password
    }

    this.appService.resetPassword(data).subscribe((apiResponse)=>{
      console.log(apiResponse);
      if(apiResponse.status===200){
        this.toastr.success(apiResponse.message);
      }
      else{
        this.toastr.error(apiResponse.message);
        this.goToLogin();
      }
    })

  }

}
