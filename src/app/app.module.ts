import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
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

const firebaseConfig = {
  apiKey: 'AIzaSyDiU5Zzun5XS8UiQJMCcY9gwYEb4MFTbPs',
  authDomain: 'tnl-fe-apartment.firebaseapp.com',
  databaseURL: 'https://tnl-fe-apartment.firebaseio.com',
  projectId: 'tnl-fe-apartment',
  storageBucket: '',
  messagingSenderId: '5192489076',
  appId: '1:5192489076:web:08c73bf7d141e990ae9921'
};

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
    RegisterHostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
