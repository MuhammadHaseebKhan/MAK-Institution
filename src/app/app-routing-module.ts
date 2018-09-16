import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { WhyMakComponent } from './why-mak/why-mak.component';

const routes: Routes = [
  {path : 'home' , component: HomeComponent},
  {path : 'aboutus' , component: AboutUsComponent},
  {path : 'whymak' , component: WhyMakComponent}
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [HomeComponent, AboutUsComponent];
