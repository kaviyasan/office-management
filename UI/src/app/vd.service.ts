import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VdService {

  public details:any=[]
  public empdetails=new BehaviorSubject<any>([]);
  // public inactivedetails=new BehaviorSubject<any>([]);

  constructor() { }
 
  getdetail(){
    return this.empdetails.asObservable();
  }
   adding(no:any){
      this.details.push(no)
      this.empdetails.next(this.details)
      console.log(this.details)
   }
}
