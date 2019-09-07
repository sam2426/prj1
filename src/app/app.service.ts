import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'node_modules/rxjs'

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
}
