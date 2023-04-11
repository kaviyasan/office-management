import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { VdService } from '../vd.service';
import { Router } from '@angular/router';
import { Dialog1Component } from '../dialog1/dialog1.component';
@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  displayedColumns: string[] = ['id','Name','Date_of_Join','Salary','action']
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private data:DataService,private dialog:MatDialog,private view:VdService,
    private route:Router) { }

  ngOnInit(): void {
    this.activefun();
  }

 activefun(){
  this.data.activedetail().subscribe((result:any)=>{
    this.dataSource = new MatTableDataSource(result.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(result);
  })
 }

 vd(row:any){
  this.dialog.open(Dialog1Component,{
    "width":"500px","height":"500px"
  })
  this.view.adding(row);
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
