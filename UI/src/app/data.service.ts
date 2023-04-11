import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';


export class User{}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private route:Router,private http:HttpClient){}

  endpoint='http://localhost:5000';


  httpHeader = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    }

  get():Observable<User>{
    return this.http.get<User>(this.endpoint+'/api/totalEmployees')
  }

upload(file:any):Observable<User>{
  return this.http.post<User>(this.endpoint+'/api/upload',file)
}
  inactive():Observable<User>{
    return this.http.get<User>(this.endpoint+'/api/inactivecount')
  }

  activedetail():Observable<User>{
    return this.http.get<User>(this.endpoint+"/api/activedetails")
  }

  inactivedetail():Observable<User>{
    return this.http.get<User>(this.endpoint+"/api/inactivedetails")
  }

  active():Observable<User>{
    return this.http.get<User>(this.endpoint+'/api/activecount')
  }

  getdetails():Observable<User>{
    return this.http.get<User>(this.endpoint+"/api/getFiledata")
  }


  loginget(data:any):Observable<User>{
    return this.http.post<User>(this.endpoint+"/api/getuser",data)
 }

}
