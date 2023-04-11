import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileComponent } from './file/file.component';
import{ReactiveFormsModule}  from '@angular/forms';
import { DetailsComponent } from './details/details.component';
// import { VdComponent } from './vd/vd.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { ActiveComponent } from './active/active.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { InactiveComponent } from './inactive/inactive.component';
import { Dialog1Component } from './dialog1/dialog1.component';
import { Dialog2Component } from './dialog2/dialog2.component';

import { LopComponent } from './lop/lop.component';
// import { OfferLetterComponent } from './offer-letter/offer-letter.component';




// import { AlertModule } from 'ngx-bootstrap';

// import { HeaderComponent } from './components/layout/header/header.component';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { ModalModule } from 'ngx-bootstrap/modal';
// import { CollapseModule } from 'ngx-bootstrap/collapse'
// import { AboutComponent } from './components/pages/about/about.component';

// import { HomeComponent } from './components/pages/home/home.component';
// import { CoverletterformComponent } from './components/coverletterform/coverletterform.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FileComponent,
    DetailsComponent,
  
    Dialog1Component,
    DialogComponent,
    ActiveComponent,
    SigninComponent,
    InactiveComponent,
   
    Dialog2Component,
  
    LopComponent,
    // OfferLetterComponent,

// HomeComponent,
// CoverletterformComponent, 
// HeaderComponent,   AboutComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    
    
    // TooltipModule,
    // AlertModule.forRoot(),
   
    // BsDropdownModule.forRoot(),
    // TooltipModule.forRoot(),
    // ModalModule.forRoot(),
    // CollapseModule.forRoot(),
  

  
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
