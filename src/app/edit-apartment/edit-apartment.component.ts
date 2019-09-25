import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Apartment} from '../model/Apartment';
import {ApartmentService} from '../apartment.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-apartment',
  templateUrl: './edit-apartment.component.html',
  styleUrls: ['./edit-apartment.component.css']
})
export class EditApartmentComponent implements OnInit {

  apartmentForm: FormGroup;
  apartment: Apartment;

  constructor(private apartmentService: ApartmentService,
              private route: ActivatedRoute,
              private router: Router) {
    this.apartmentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      numberOfRooms: new FormControl(''),
      numberOfBathrooms: new FormControl(''),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      imageUrls: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      startDate: new FormControl(),
      endDate: new FormControl()
    });
    this.apartment = {
      id: 0,
      name: '',
      category: '',
      address: '',
      numberOfRooms: '',
      numberOfBathrooms: '',
      price: '',
      description: '',
      imageUrls: [],
      rate: '',
      area: '',
      startDate: null,
      endDate: null,
      status: '',
      user: ''
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const id = +paramMap;
      this.apartmentService.getApartmentById(id).subscribe(next => {
        this.apartment = next.data;
        console.log(next.data);
      }, error1 => {
        console.log(error1);
        this.apartment = null;
      });
    });
  }

  editApartment() {
    console.log(this.apartment);
    this.apartmentService.updateApartment(this.apartment).subscribe(next => {
      alert(next.message);
    }, error => console.log(error));
  }
}
