import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ImageUploadModule } from '../shared/image-upload/image-upload.module'


const routes: Routes = [
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'forget_password', component:ForgetPasswordComponent},
];

@NgModule({
  declarations: [SignupComponent, LoginComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ImageUploadModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
