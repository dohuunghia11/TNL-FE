import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './model/User';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  // register(user: User): Observable<User> {
  //   return this.httpClient.post<User>(this.API_URL, user);
  // }
  registerGuest(user: Partial<User>): Observable<any> {
    return this.httpClient.post<any>(this.API_URL + '/api/sign-up', user);
  }

  registerHost(user: Partial<User>): Observable<any> {
    return this.httpClient.post<any>(this.API_URL + '/api/host/sign-up', user);
  }
  // private API_URL = environment.URL + '/api';
  //
  // constructor(private httpClient: HttpClient) {
  // }
  //
  // registerGuest(user: Partial<User>): Observable<User> {
  //   return this.httpClient.post<User>(this.API_URL + '/sign-up', user);
  // }
  //
  // registerHost(user: Partial<User>): Observable<User> {
  //   return this.httpClient.post<User>(this.API_URL + '/host/sign-up', user);
  // }
}
