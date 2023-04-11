import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';

import { Dialog1Component } from './dialog1/dialog1.component';
import { DialogComponent } from './dialog/dialog.component';
import { Dialog2Component } from './dialog2/dialog2.component';
import { FileComponent } from './file/file.component';
import { InactiveComponent } from './inactive/inactive.component';
import { SigninComponent } from './signin/signin.component';

import { LopComponent } from './lop/lop.component';

// import { OfferLetterComponent } from './offer-letter/offer-letter.component';

const routes: Routes = [{path:"dashboard",component:DashboardComponent},
{path:"file",component:FileComponent},
{path:"details",component:DetailsComponent},
{path:"dialog",component:DialogComponent},
{path:"signin",component:SigninComponent},
{path:"dialog1",component:Dialog1Component},
{path:"dialog2",component:Dialog2Component},
{path:"active",component:ActiveComponent},
{path:"inactive",component:InactiveComponent},
{path:"lop",component:LopComponent},
{path:"",component:SigninComponent},
// {path:"offer",component:OfferLetterComponent}
// {path: 'g', component:HomeComponent},
// {path: 'about', component:AboutComponent},
// {path:"cover",component:CoverletterformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
