import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = 'http://localhost:8080/api/user';

  constructor(private httpClient: HttpClient) {
  }

  register(user: Partial<User>): Observable<User> {
    return this.httpClient.post<User>(this.API_URL, user);
  }

  update(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.API_URL}/${user.id}`, user);
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.API_URL}/${id}`);
  }
  delete(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.API_URL}/${id}`);
  }
}
