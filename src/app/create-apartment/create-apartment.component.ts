import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Apartment} from '../model/Apartment';
import {Router} from '@angular/router';
import {ApartmentService} from '../apartment.service';

@Component({
  selector: 'app-create-apartment',
  templateUrl: './create-apartment.component.html',
  styleUrls: ['./create-apartment.component.css']
})
export class CreateApartmentComponent implements OnInit {

  apartmentForm: FormGroup;
  apartment: Partial<Apartment>;

  constructor(private router: Router,
              private service: ApartmentService) {
    this.apartmentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      numberOfRooms: new FormControl(''),
      numberOfBathrooms: new FormControl(''),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      rate: new FormControl(''),
      area: new FormControl('', Validators.required)
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
  onChange($event) {
    this.apartment.image = $event;
  }
  ngOnInit() {
  }

  createApartment() {
    console.log(this.apartment);
    this.service.createApartment(this.apartment).subscribe(() => {
      this.router.navigate(['/home-for-host']);
    }, error => console.log(error) );
  }
}
