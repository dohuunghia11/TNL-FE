import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ApartmentDetailComponent} from './apartment-detail/apartment-detail.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RegisterHostComponent} from './register-host/register-host.component';
import {UploadFileComponent} from './upload-file/upload-file.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'apartments/:id', component: ApartmentDetailComponent},
  {path: 'api/login', component: LoginComponent},
  {path: 'api/sign-up', component: RegisterComponent},
  {path: 'api/host/sign-up', component: RegisterHostComponent},
  {path: 'upload', component: UploadFileComponent},
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
