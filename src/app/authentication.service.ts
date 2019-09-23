import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private API_URL = environment.URL + '/api/login';
  token: string;
  header: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.token = localStorage.getItem('token');
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    });
  }

  // ko can phai su dung JSON.stringigy de convert tu oject sang json
  authenticate(user): Observable<any> {
    return this.httpClient.post<any>(this.API_URL, user);
  }

  isLoggedIn() {
    const username = localStorage.getItem('currentUser');
    return !(username === null);
  }

  logout() {
    localStorage.clear();
  }
}
