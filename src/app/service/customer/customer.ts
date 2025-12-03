import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  URL:string = "http://localhost:3000/customers"; 
  constructor(private http:HttpClient){}

    getApiData(): Observable<any[]>{
      return this.http.get<any[]>(this.URL);
    }
}
