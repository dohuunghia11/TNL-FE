import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly API_URL = 'http://localhost:8080/api/login';
  token: string;

  login(loginForm: FormGroup): Observable<any> {
    return this.httpClient.post(this.API_URL, JSON.stringify(loginForm), httpOptions);
  }

  constructor(private httpClient: HttpClient) {
  }
}
