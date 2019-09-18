import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  registerGuest(user: Partial<User>): Observable<any> {
    return this.httpClient.post<any>(this.API_URL + '/api/sign-up', user);
  }

  registerHost(user: Partial<User>): Observable<any> {
    return this.httpClient.post<any>(this.API_URL + '/api/host/sign-up', user);
  }
}
