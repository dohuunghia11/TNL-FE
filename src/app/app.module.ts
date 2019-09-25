import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { SearchComponent } from './search/search.component';
import {ApartmentDetailComponent} from './apartment-detail/apartment-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { RegisterComponent } from './register/register.component';
import { RegisterHostComponent } from './register-host/register-host.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireStorageModule} from 'angularfire2/storage';
import { FooterTopComponent } from './footer-top/footer-top.component';
import {AuthHttpInterceptorService} from './auth-http-interceptor.service';
import { HomeForHostComponent } from './home-for-host/home-for-host.component';
import { CreateApartmentComponent } from './create-apartment/create-apartment.component';
import { HeaderForHostComponent } from './header-for-host/header-for-host.component';
import {environment} from '../environments/environment';
import { ListApartmentComponent } from './list-apartment/list-apartment.component';
import { DatePickerComponent } from './date-picker/date-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    ApartmentDetailComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    LoginComponent,
    UploadFileComponent,
    RegisterComponent,
    RegisterHostComponent,
    FooterTopComponent,
    HomeForHostComponent,
    CreateApartmentComponent,
    HeaderForHostComponent,
    ListApartmentComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
