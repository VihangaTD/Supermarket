import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Data {
  
  constructor(private http:HttpClient){}

    getApiData(): Observable<any>{
      const apiUrl:string = 'https://jsonplaceholder.typicode.com/posts';
      return this.http.get(apiUrl);
    }
  
}
