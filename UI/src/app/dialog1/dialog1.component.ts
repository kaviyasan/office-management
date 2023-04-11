import { Component, OnInit } from '@angular/core';
import { VdService } from '../vd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component implements OnInit {
ans:any;
  constructor(private view:VdService,private route:Router) { }

  ngOnInit(): void {
  
  this.view.getdetail().subscribe((result:any)=>{
    this.ans=result;
    console.log(this.ans)
  })
  }

  click(){
    this.route.navigate(['active']).then(()=>{
      window.location.reload();
    })
  }
}
