import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LandingComponent } from "./landing/landing.component";

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },  
  {
    path: 'home',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
