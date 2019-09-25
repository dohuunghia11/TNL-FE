import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Apartment} from '../model/Apartment';
import {Router} from '@angular/router';
import {ApartmentService} from '../apartment.service';
import {ImageOfApartment} from '../model/ImageOfApartment';
import {StandardResponse} from '../model/StandardResponse';

@Component({
  selector: 'app-create-apartment',
  templateUrl: './create-apartment.component.html',
  styleUrls: ['./create-apartment.component.css']
})
export class CreateApartmentComponent implements OnInit {

  apartmentForm: FormGroup;
  apartment: Partial<StandardResponse>;

  constructor(private router: Router,
              private apartmentService: ApartmentService) {
    this.apartmentForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      numberOfRooms: new FormControl('', Validators.min(0)),
      numberOfBathrooms: new FormControl('', Validators.min(0)),
      price: new FormControl('', Validators.min(0)),
      description: new FormControl('', Validators.required),
      // images: new FormControl('', Validators.required),
      rate: new FormControl(''),
      area: new FormControl('', Validators.min(0))
    });
//     this.apartment = {
//       name: '',
//       category: '',
//       address: '',
//       numberOfRooms: '0',
//       numberOfBathrooms: '0',
//       price: '0',
//       description: '',
//       // images: ['https://previews.123rf.com/images/anthonycz/anthonycz1208/anthonycz120800119/15033060-house-icon.jpg'],
//       rate: '0',
//       area: '0',
//       startDate: null,
//       endDate: null
//     };
//   }
//   // onChange($event) {
//   //   this.apartment.images = $event;
//   // }
//   ngOnInit() {
//   }
//
//   createApartment() {
//     // this.apartment.images = this.apartmentService.imageUrls;
//     console.log(this.apartment);
//     const imageApartments: ImageOfApartment[] = [];
//     // tslint:disable-next-line:prefer-for-of
//     for (let i = 0; i < this.apartmentService.imageUrls.length; i++) {
//       const imageApartment = new ImageOfApartment();
//       imageApartment.imageUrl = this.apartmentService.imageUrls[i];
//       imageApartment.apartment = this.apartment;
//       imageApartments.push(imageApartment);
//     }
//     this.apartmentService.createApartment(imageApartments).subscribe(next => {
//       console.log(next);
//       this.router.navigate(['/home-for-host']);
//     }, error => console.log(error));
//   }
// }
  }

  ngOnInit() {
  }

  onChange($event) {
    this.apartment.data.imageUrls = $event;
  }

  createApartment() {
    if (this.apartmentForm.valid) {
      console.log(this.apartment);
      const imageApartments: ImageOfApartment[] = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.apartmentService.imageUrls.length; i++) {
        const imageApartment = new ImageOfApartment();
        imageApartment.imageUrl = this.apartmentService.imageUrls[i];
        imageApartment.apartment = this.apartment;
        imageApartments.push(imageApartment);
      }
      this.apartmentService.createApartment(imageApartments).subscribe(next => {
        console.log(next);
        this.router.navigate(['/home-for-host']);
      }, error => console.log(error));
    } else {
      alert('Thông tin nhà chưa đủ hoặc không hợp lệ. Vui lòng kiểm tra lại.');
    }
  }
}
