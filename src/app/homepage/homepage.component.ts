import { Component, OnInit } from '@angular/core';
import {ApartmentService} from '../apartment.service';
import {Apartment} from '../model/Apartment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  bestChoiceApartments: Apartment[];
  bestSaleOffApartments = this.bestChoiceApartments;
  suggestionApartments = this.bestChoiceApartments;
  constructor(private apartmentService: ApartmentService) { }

  ngOnInit() {
    // this.apartmentService.getApartments()
    //   .subscribe(next => {
    //     this.apartments = next;
    //   });
  }

}
