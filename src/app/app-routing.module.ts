import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';


const routes: Routes = [
  {path: '', component: HomepageComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
