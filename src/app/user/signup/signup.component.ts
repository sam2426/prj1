import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { ImageService } from '../../services/image.service'

class ImageSnippet{
  constructor(
    public src:string,
    public file:File
  ){}
}

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
  public picUrl:any='';
  public showLoader:boolean=false;

  constructor(
    public toastr:ToastrService,
    public appService:AppService,
    public router:Router,
    public imageService:ImageService
  ) { }

  ngOnInit() {
  }
  public imageTarget:String='';
  public selectedFile:ImageSnippet;

  public processFile(event){
    // debugger;
    const file:File=event.target.files[0];
    const reader=new FileReader();

    reader.addEventListener('load',(event:any)=>{
      this.imageTarget=event.target.result;
      this.selectedFile=new ImageSnippet(event.target.result,file)
    });
    reader.readAsDataURL(file);
  }

  public goToSignIn(){
    this.router.navigate(['/login']);
  }

 
  public signUpFunction=()=>{
   this.showLoader=true;
    let uploadImage :any= () => {
      return new Promise((resolve, reject) => {
        if(this.imageTarget==null||this.imageTarget==''){
          resolve();
        }else{
          this.appService.uploadImage(this.selectedFile.file).subscribe((apiResponse) => {
            if(apiResponse.status===200){
            this.picUrl = apiResponse.data;
            console.log(apiResponse.data);
            resolve();
            }else{
              reject(apiResponse.message);
            }
          })
        }
      })
    }

    let signUp: any=()=> {
      return new Promise((resolve,reject)=>{
          let data={
            firstName:this.firstName,
            lastName:this.lastName,
            mobile:this.mobile,
            email:this.email,
            password:this.password,
            gender:this.gender,
            profilePic:this.picUrl,
           }
          console.log(data);
        
            this.appService.signupFunction(data).subscribe((apiResponse)=>{ 
            console.log(apiResponse);
    
            if (apiResponse.status===200){
              resolve(apiResponse)
            }
            else{
              reject()
            }
          },
          (err)=>{
            reject();
          });
        }) 
    }
    
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
      uploadImage()
      .then(signUp)
      .then((resolve)=>{
        console.log(resolve);
        this.toastr.success('SignUp Successfully');
        this.showLoader=false;
        this.goToSignIn();  // after signup redirecting to signin, ngx toaster still shows after 
                           //refreshing so no need for timeout.
      })
      .catch(()=>{
        this.showLoader=false;
        this.toastr.error('Some error occured');
      })
     }
  }
  
}
