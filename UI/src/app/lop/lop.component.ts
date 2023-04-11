import { Component, OnInit } from '@angular/core';
import { VdService } from '../vd.service';
import { Router } from '@angular/router';
import {getset} from '../details/getSetMethod'

@Component({
  selector: 'app-lop',
  templateUrl: './lop.component.html',
  styleUrls: ['./lop.component.css']
})
export class LopComponent implements OnInit {
 value:any;
  totalEarning: any;
  total: any;
  getData: any;
  empDetails:any=[]
  constructor(private vd:VdService,private route:Router) { }
math=Math;
  ngOnInit(): void {
    // this.vd.getdetail().subscribe((result:any)=>{
    //   this.value=result;
    //   for(let i of this.value){
    //     this.totalEarning=i.Salary
    //     console.log(this.totalEarning);
    //   }
    //   this.total=this.totalEarning+6262.4+1500+712.8 
    //   // console.log();
      
    //   console.log(this.value)
    // })
    this.getData=getset.rowdata()
    console.log(this.getData);
    // console.log(this.getData.id);
    
    this.empDetails.push({
      empId:this.getData.id,
      name:this.getData.Name,
      designation:this.getData.Designation,
      date_of_join:this.getData.Date_of_Join,
      pan:this.getData.PAN,
      ac_no:this.getData.Bank_AC_Number,
      lop:this.getData.LOP,
      basic:this.getData.Basic,
      hra:this.getData.HRA,
      allowarnce:this.getData.Allowance,
      loss_of_pay:this.getData.L_O_P,
      total:this.getData.Salary,
      net_salary:this.getData.total_salry
    })
    // this.empDetails.push({
    //   empId:
    // })
    
  }
  print(){
    window.print();
  }
  // back(){
  //   this.route.navigate(['details'])
  //   .then(()=>{
  //     window.location.reload();
  //   })
  // }

}
