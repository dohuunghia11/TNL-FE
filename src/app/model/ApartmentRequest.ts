import {Apartment} from './Apartment';
import {ImageOfApartment} from './ImageOfApartment';

export class HouseRequest {
  apartment: Partial<Apartment>;
  images: ImageOfApartment;

  constructor(apartment, image) {
    this.apartment = apartment;
    this.images = image;
  }
}
