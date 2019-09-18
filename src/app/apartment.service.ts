import { Injectable } from '@angular/core';
import {Apartment} from './model/Apartment';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  apartment: Apartment[];
  header: Headers;
  private readonly API_URL = 'http://localhost:8080/api/apartments';

  getApartments(): Observable<Apartment[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.authenService.token}`,
      })
    };
    console.log(httpOptions);
    return this.http.get<Apartment[]>(this.API_URL, httpOptions);
  }
  getApartmentById(id: number): Observable<Apartment> {
    return this.http.get<Apartment>(`${this.API_URL}/${id}`);
  }
  createApartment(book: Partial<Apartment>): Observable<Apartment> {
    return this.http.post<Apartment>(this.API_URL, book);
  }
  updateApartment(book: Apartment): Observable<Apartment> {
    return this.http.put<Apartment>(`${this.API_URL}/${book.id}`, book);
  }
  deleteApartment(id: number): Observable<Apartment> {
    return this.http.delete<Apartment>(`${this.API_URL}/${id}`);
  }
  constructor(private http: HttpClient, private authenService: AuthenticationService) {
    console.log(this.header);
  }
}
