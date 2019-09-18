import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ApartmentDetailComponent} from './apartment-detail/apartment-detail.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'houses/:id', component: ApartmentDetailComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
