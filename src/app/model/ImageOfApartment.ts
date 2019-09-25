import {Apartment} from './Apartment';

export class ImageOfApartment {
  id: number;
  imageUrl: string;
  apartment: Partial<Apartment>;

  constructor() {
  }
}
