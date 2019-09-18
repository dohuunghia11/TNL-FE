import { Injectable } from '@angular/core';
import {Apartment} from './model/Apartment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  apartment: Apartment[];
  private readonly API_URL = 'http://localhost:8080/api/apartments';

  getApartments(): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(this.API_URL);
  }
  getBookById(id: number): Observable<Apartment> {
    return this.http.get<Apartment>(`${this.API_URL}/${id}`);
  }
  createBook(book: Partial<Apartment>): Observable<Apartment> {
    return this.http.post<Apartment>(this.API_URL, book);
  }
  updateBook(book: Apartment): Observable<Apartment> {
    return this.http.put<Apartment>(`${this.API_URL}/${book.id}`, book);
  }
  deleteBook(id: number): Observable<Apartment> {
    return this.http.delete<Apartment>(`${this.API_URL}/${id}`);
  }
  constructor(private http: HttpClient) { }
}