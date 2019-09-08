import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { ToastrService } from 'ngx-toastr';

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
        this.toastr.success('Please check email for validator');
      }
      else{
        this.toastr.error("Email doesn't exist");
      }
    })
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
        this.toastr.success('Password Changed');
      }
      else{
        this.toastr.error("Password requirements didn't meet");
      }
    })

  }

}
