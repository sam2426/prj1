import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  ) {}

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
    }    
  }
  ngOnInit() {
  }
}
