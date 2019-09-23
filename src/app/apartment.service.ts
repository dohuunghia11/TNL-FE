import { Injectable } from '@angular/core';
import {Apartment} from './model/Apartment';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  apartment: Apartment[];
  private API_URL = environment.URL + '/api/apartments';

  constructor(private http: HttpClient, private authenService: AuthenticationService) {
  }

  getApartments(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  getApartmentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }

  createApartment(apartment: Partial<Apartment>): Observable<Apartment> {
    return this.http.post<Apartment>(this.API_URL, apartment);
  }

  updateApartment(apartment: Apartment): Observable<Apartment> {
    return this.http.put<Apartment>(`${this.API_URL}/${apartment.id}`, apartment);
  }

  deleteApartment(id: number): Observable<Apartment> {
    return this.http.delete<Apartment>(`${this.API_URL}/${id}`);
  }
}
