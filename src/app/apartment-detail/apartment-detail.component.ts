import { Component, OnInit } from '@angular/core';
import {Apartment} from '../model/Apartment';
import {ApartmentService} from '../apartment.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {

  apartment: Apartment = {
    id: 0,
    name: '',
    category: '',
    address: '',
    numberOfRooms: '',
    numberOfBathrooms: '',
    price: '',
    description: '',
    images: [],
    rate: '',
    area: ''
  };

  time: Date = new Date();

  constructor(private apartmentService: ApartmentService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
    const id = +this.route.snapshot.paramMap.get('id');
    this.apartmentService.getApartmentById(id).subscribe(
      next => (this.apartment = next),
      error => {
        console.log(error);
        this.apartment = null;
      }
    );
  }

}
