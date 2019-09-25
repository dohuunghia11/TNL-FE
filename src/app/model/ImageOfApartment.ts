import {Apartment} from './Apartment';
import {StandardResponse} from './StandardResponse';

export class ImageOfApartment {
  id: number;
  imageUrl: string;
  apartment: Partial<StandardResponse>;

  constructor() {
  }
}
