import { User } from './user';
import {Lesson} from "./lesson";

export interface Course {
  id?: number;
  name: string;
  about: string;
  price: number;
  sum_of_rates?: number;
  no_of_rates?: number;
  rating?: number;
  time_created?: any;
  organization: string;
  exam: string;
  teacher: string;
  creator?: User;
}
