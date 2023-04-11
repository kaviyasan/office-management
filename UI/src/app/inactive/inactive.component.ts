import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VdService } from '../vd.service';
// import { Dialog1Component } from '../dialog1/dialog1.component';
import { Dialog2Component } from '../dialog2/dialog2.component';


@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent implements OnInit {
  displayedColumns: string[] = ['id','Name','Date_of_Join','Salary','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private data:DataService,private route:Router,private dialog:MatDialog,
    private view:VdService) { }

  ngOnInit(): void {
    this.inactivefunction();
  }
  

  inactivefunction(){
    this.data.inactivedetail().subscribe((result:any)=>{
      this.dataSource = new MatTableDataSource(result.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
    })
  }
  click(row:any){
    this.dialog.open(Dialog2Component,{
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
