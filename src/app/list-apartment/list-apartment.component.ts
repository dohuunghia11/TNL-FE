import { Component, OnInit } from '@angular/core';
import {Apartment} from '../model/Apartment';
import {ApartmentService} from '../apartment.service';

@Component({
  selector: 'app-list-apartment',
  templateUrl: './list-apartment.component.html',
  styleUrls: ['./list-apartment.component.css']
})
export class ListApartmentComponent implements OnInit {

  bestChoiceApartments: Apartment[];
  bestSaleOffApartments = this.bestChoiceApartments;
  suggestionApartments = this.bestChoiceApartments;


  constructor(private apartmentService: ApartmentService) {

  }

  ngOnInit() {
    this.apartmentService.getApartments()
      .subscribe(next => {
        this.bestChoiceApartments = next.data;
        console.log(next);
      });
  }
}
