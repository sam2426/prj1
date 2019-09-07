import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstName:string;
  public lastName:any;
  public mobile:any;
  public email:any;
  public password:any;
  public gender:any;

  constructor(
    public toastr:ToastrService,
    public appService:AppService,
    public router:Router,

  ) { }

  ngOnInit() {
  }

  public goToSignIn(){
    this.router.navigate(['/login']);
  }

  public signUpFunction: any=()=> {
    if(!this.firstName){
      this.toastr.warning('enter first name');
    }else if(!this.lastName){
      this.toastr.warning('enter last name');
    }else if(!this.mobile){
      this.toastr.warning('enter mobile number');
    }else if(!this.password){
      this.toastr.warning('enter password');
    }else if(!this.email){
      this.toastr.warning('enter email');
    }else if(!this.gender){
      this.toastr.warning('select gender');
     }else{
      let data={
        firstName:this.firstName,
        lastName:this.lastName,
        mobile:this.mobile,
        email:this.email,
        password:this.password,
        apiKey:this.gender,
       }
      console.log(data);
    
        this.appService.signupFunction(data).subscribe((apiResponse)=>{ 
        console.log(apiResponse);

        if (apiResponse.status===200){
          this.toastr.success('SignUp Successfully');

          this.goToSignIn();  // after signup redirecting to signin, ngx toaster still shows after 
                              //refreshing so no need for timeout.
        }
        else{
          this.toastr.error(apiResponse.message);
        }
      },
      (err)=>{
        this.toastr.error('Some error occured');
      });
    } 
  }
}
