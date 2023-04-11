import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
// import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  upload:any;
  
  constructor(private service:DataService,private route:Router,private http:HttpClient) { }

  file:any

  ngOnInit(): void {
    
  }
  onChange(event:any){
    this.file=event.target.files[0];
  }
  fileUpload(){
  // if(this.fileup.valid){
    let formdata=new FormData();
    console.log(formdata);
    console.log(this.file);
    
    
    formdata.append("csvFile",this.file)
   this.service.upload(formdata).subscribe((res)=>{
    this.upload=res
    console.log(this.upload);

    if(this.upload==null){
      alert("please upload the file")
     
   }
    else{
      alert("successfully uploaded")
      this.route.navigate(['file']).
      then(()=>{
        window.location.reload();
      })
    }
    
   })
   
    
 
}


}
