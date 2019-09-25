import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ApartmentDetailComponent} from './apartment-detail/apartment-detail.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RegisterHostComponent} from './register-host/register-host.component';
import {HomeForHostComponent} from './home-for-host/home-for-host.component';
import {CreateApartmentComponent} from './create-apartment/create-apartment.component';
import {UploadFileComponent} from './upload-file/upload-file.component';
import {ProfileUserComponent} from './profile-user/profile-user.component';
import {EditApartmentComponent} from './edit-apartment/edit-apartment.component';


const routes: Routes = [
  {path: 'api/apartments', component: HomepageComponent},
  {path: 'api/apartments/:id', component: ApartmentDetailComponent},
  {path: 'api/login', component: LoginComponent},
  {path: 'api/sign-up', component: RegisterComponent},
  {path: 'api/host/sign-up', component: RegisterHostComponent},
  {path: 'api/upload', component: UploadFileComponent},
  {path: 'api/home-for-host', component: HomeForHostComponent},
  {path: 'api/create-apartment', component: CreateApartmentComponent},
  {path: '**', redirectTo: 'api/apartments', pathMatch: 'full'},
  {path: 'api/profileUser', component: ProfileUserComponent},
  {path: 'api/edit-apartment/:id', component: EditApartmentComponent},
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
