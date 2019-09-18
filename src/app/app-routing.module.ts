import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ApartmentDetailComponent} from './apartment-detail/apartment-detail.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'apartments/:id', component: ApartmentDetailComponent},
  {path: 'login', component: LoginComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
