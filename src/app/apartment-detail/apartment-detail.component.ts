import { Component, OnInit } from '@angular/core';
import {Apartment} from '../model/Apartment';
import {ApartmentService} from '../apartment.service';
import {ActivatedRoute} from '@angular/router';
import {StandardResponse} from '../model/StandardResponse';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {

  apartmentDetail: StandardResponse;

  time: Date = new Date();

  constructor(private apartmentService: ApartmentService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    setInterval(() => {
      this.time = new Date();
    }, 1000);
    const id = +this.route.snapshot.paramMap.get('id');
    this.apartmentService.getApartmentById(id)
      .subscribe(
        data => {
          this.apartmentDetail = data;
          console.log(data);
          this.apartmentDetail.data = {
            id: data.data.id,
            name: data.data.name,
            category: data.data.category,
            address: data.data.address,
            numberOfRooms: data.data.numberOfRooms,
            numberOfBathrooms: data.data.numberOfBathrooms,
            price: data.data.price,
            description: data.data.description,
            imageUrls: data.data.imageUrls,
            rate: data.data.rate,
            area: data.data.area,
            status: data.data.status,
            user: data.data.user,
            startDate: data.data.startDate,
            endDate: data.data.endDate
          };
        },
        error => {
          console.log(error);
          this.apartmentDetail = null;
        });
  }


}
