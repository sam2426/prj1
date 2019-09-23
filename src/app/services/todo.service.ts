import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url="api.anglrapp.site/api/v1";

  constructor(public http: HttpClient, public cookies:CookieService) { }

  public todoList(data):Observable<any>{
    const params=new HttpParams()
    .set('todoId',data);
    return this.http.post(`${this.url}/todo/getTodo`,params);
  }

  public getUserTodoHeaders(userId):Observable<any>{
    return this.http.get(`${this.url}/todo/${userId}/getHeaders`);
  }

  public initiateHeader(data):Observable<any>{
    const params=new HttpParams()
    .set('message',data.message)
    .set('users',data.user);
    return this.http.post(`${this.url}/todo/initiate`,params);
  }


}
