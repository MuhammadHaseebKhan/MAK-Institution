import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { WhyMakComponent } from './why-mak/why-mak.component';
import { CertificateCoursesComponent } from './certificate-courses/certificate-courses.component';
import { OfficeAutomationDetailComponent } from './office-automation-detail/office-automation-detail.component';
import { CeoComponent } from './ceo/ceo.component';


const routes: Routes = [
  {path : 'home' , component: HomeComponent},
  {path : 'aboutus' , component: AboutUsComponent},
  {path : 'whymak' , component: WhyMakComponent},
  {path : 'certificatecourses' , component: CertificateCoursesComponent},
  {path : 'officeautomationdetails' , component: OfficeAutomationDetailComponent},
  {path : 'ceo' , component: CeoComponent}
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [HomeComponent, AboutUsComponent, WhyMakComponent
  , CertificateCoursesComponent, OfficeAutomationDetailComponent , CeoComponent];
