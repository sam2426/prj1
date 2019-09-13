import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http'
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(public http:HttpClient) { }

  public uploadImage(image:File):Observable<any>{
    const formData=new FormData();

    formData.append('image',image);

    return this.http.post('/api/v1/image-upload', formData);
  }
}
