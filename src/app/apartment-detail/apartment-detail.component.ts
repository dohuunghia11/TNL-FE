import { Component, OnInit } from '@angular/core';
import {Apartment} from '../model/Apartment';
import {ApartmentService} from '../apartment.service';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {

  listApartment: Apartment[];

  constructor(private apartmentService: ApartmentService) {
    this.listApartment = apartmentService.listApartment;
  }

  ngOnInit() {
  }

}
