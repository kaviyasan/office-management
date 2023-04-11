


import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { VdService } from '../vd.service';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.css']
})
export class Dialog2Component implements OnInit {
  sol: any;

  constructor(private data:DataService,private router:Router, private vd:VdService) { }
val:any;
  ngOnInit(): void {
 this.vd.getdetail().subscribe((rsl)=>{
  this.val=rsl
 })
  }
  click(){
    this.router.navigate(['inactive']).
    then(()=>{
      window.location.reload()
    })
  }


}

