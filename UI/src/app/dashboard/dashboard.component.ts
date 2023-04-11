import { IfStmt, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. `;

  private days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

  public date=new Date()
  employees:any
  dan:any;
  public hr:any;
  public min:any;
public sec:any;
day:any;
ac:any;
ic:any;
local:String=new Date().toLocaleDateString();

  // datetime:any;
// clock:any;
  
  constructor(private data:DataService,private route:Router) { }

  ngOnInit(): void {

    this.data.get().subscribe((result:any)=>{
      this.employees=result.data;
      console.log(this.employees)
    })

    this.data.active().subscribe((result:any)=>{
      this.ac=result.data;
      console.log(this.ac)
    })

    this.data.inactive().subscribe((result:any)=>{
      this.ic=result.data;
      console.log(this.ic);
    })


  setInterval(()=>{
    const date=new Date();
    // console.log(date);
    this.updatedat(date); 
  },1000);

   
  this.day=this.days[this.date.getDay()];
  // this.date=this.date[this.date.getDate()]
  }

  updatedat(date:Date){
     const hrs=date.getHours();
     const secs=date.getSeconds();
     this.dan=hrs>=12?'PM':'AM';
     this.hr=hrs%12;
     this.hr=this.hr?this.hr:12;
     this.hr=this.hr<10?'0'+this.hr:this.hr;
     const mins=date.getMinutes();
     this.min=mins<10?'0'+mins:mins.toString();
     this.sec=secs<10?'0'+secs:secs.toString();
     
  }
  offerLetter(){
    this.route.navigate(["offer"])
  }
  // const datetime=document.querySelector('#datetime')
   
  // time(){
    
  // var time=new Date();
  // var hrs=time.getHours();
  // var min=time.getMinutes();
  // var sec=time.getSeconds();
 
  
  //  this.dan="AM"
  // if(hrs>12){
  //   hrs=hrs-12;
  //   this.dan="PM";
  // }
  // else if(hrs==12){
  //   hrs=12;
  //   this.dan="AM";
    
  // }
  // console.log(`${hrs}:${min}:${sec} ${this.dan}`)
  // setInterval(time,1000)
  
  // }
  
 
  // setInterval(time){};

details(){
  this.route.navigate(['details'])
}
details1(){
  this.route.navigate(['active'])
}
details2(){
  this.route.navigate(['inactive'])
}
file(){
  this.route.navigate(['file'])
}
signout(){
  this.route.navigate(['signin'])
}

}
