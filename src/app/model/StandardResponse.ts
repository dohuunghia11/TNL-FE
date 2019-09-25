import {Apartment} from './Apartment';

export interface StandardResponse {
  success: boolean;
  message: string;
  data: Apartment;
}
