import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginform=new FormGroup({
    employeeid:new FormControl(''),
    password:new FormControl('')
  })


  constructor(private data:DataService,private route:Router,private http:HttpClient) { }
 val:any;
  ngOnInit(): void {
  }
  @Output() messageEvent=new EventEmitter<any>()
  signin(){
    console.log(this.loginform.value)
    this.data.loginget(this.loginform.value).subscribe((result:any)=>{
      this.val=result;
      console.log(this.val)
  

    if(this.val.code==200){
      alert("login successfull")
      console.log(this.val)
      this.route.navigate(['dashboard'])
    }
    else if(this.val.code==400 && this.val.message=="employeeid is not match"){
      alert("email is not match")
      console.log(this.val)
    }
    else if(this.val.code==400 && this.val.message=="password is not match"){
      alert("password is not match")
      console.log(this.val)
    }
    else if(this.val.code==400){
      alert("login failed")
      console.log(this.val)
    }
  })
  }
}
