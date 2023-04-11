
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VdService } from '../vd.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private view:VdService,private route:Router) { }

 
  ans:any;
  ngOnInit(): void {
     this.view.getdetail().subscribe((result:any)=>{
      this.ans=result;
    })
  }

  rturn(){
    this.route.navigate(["details"])
    .then(()=>{
      window.location.reload()
    })
  }

}
