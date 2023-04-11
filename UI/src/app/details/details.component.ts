import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { VdService } from '../vd.service';
// import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {getset} from './getSetMethod'


// export interface User{
//   Name:string;
//    Date_of_Jion:string;
//    Salary:string
// }
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 displayedColumns:string[]=['id','Name','Date_of_Join','Salary','action','option']
//  ' Father_Name']
//  ,' Date_of_Resignation',
//  'Date_of_Birth',
//  'Mobile_NO',
//  'Postal_Address',
//  'Name_of_Nominee',
//  'Salary',
//  'Designation',
//  'Aadhar_No',
//  'PAN',
//  'Bank_AC_Number',
//  'IFSC_code',
//  'Emp_status',
//  'Company_Name']
 dataSource!:MatTableDataSource<any>;

 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;

  constructor(private data:DataService,private route:Router,private view:VdService,private dialog:MatDialog) { }
 val:any;
 row:any;
//  ngAfterViewInit() {
//   this.dataSource.paginator = this.paginator;
//   this.dataSource.sort = this.sort;
// }

  ngOnInit(): void {
  this.get();
  }

  get(){
  this.data.getdetails().subscribe((result:any)=>{
    this.dataSource=new MatTableDataSource(result.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(result);
  })

}

vd(row:any) {
    this.dialog.open(DialogComponent, {
      "height":"500px",
      "width":"500px"
    });
    this.view.adding(row);
  }

  payroll(row:any){
    this.route.navigate(['lop'])
    // this.view.adding(row); 
    getset.data(row)

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  

}
