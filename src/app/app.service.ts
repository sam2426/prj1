import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url="http://localhost:3000/api/v1";

  constructor(public http: HttpClient, public cookies:CookieService) { }

  public signupFunction(data):Observable<any>{
    const params=new HttpParams()
    .set('firstName', data.firstName)
    .set('lastName', data.lastName)
    .set('mobileNumber', data.mobile)
    .set('email', data.email)
    .set('password', data.password);

    return this.http.post(`${this.url}/users/signup`,params);
  }//end of signup function

  public loginFunction(data):Observable<any>{
    const params=new HttpParams()
    .set('email', data.email)
    .set('password',data.password);
    return this.http.post(`${this.url}/users/login`,params);
  }

  public forgetPassword(data):Observable<any>{
    const params=new HttpParams()
    .set('email',data.email);
    return this.http.post(`${this.url}/users/forgetPassword`,params);
  }

  public resetPassword(data):Observable<any>{
    const params=new HttpParams()
    .set('email',data.email)
    .set('otp',data.otp)
    .set('password',data.password);
    return this.http.post(`${this.url}/users/resetPassword`,params);
  }
}
