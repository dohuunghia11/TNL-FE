import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Apartment} from '../model/Apartment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-apartment',
  templateUrl: './create-apartment.component.html',
  styleUrls: ['./create-apartment.component.css']
})
export class CreateApartmentComponent implements OnInit {

  apartmentForm: FormGroup;
  apartment: Partial<Apartment>;

  constructor(private router: Router) {
    this.apartmentForm = new FormGroup({
      name: new FormControl(''),
      category: new FormControl(''),
      address: new FormControl(''),
      numberOfRooms: new FormControl(''),
      numberOfBathrooms: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
      rate: new FormControl(''),
      area: new FormControl('')
    });
    this.apartment = {
      name: '',
      category: '',
      address: '',
      numberOfRooms: '0',
      numberOfBathrooms: '0',
      price: '0',
      description: '',
      image: '',
      rate: '0',
      area: '0'
    };
  }

  ngOnInit() {
  }

  createHouse() {
    this.router.navigate(['/home-for-host']);
  }
}
