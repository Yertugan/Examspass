import { User } from './user';
import {Lesson} from "./lesson";

export interface Course {
  id?: number;
  body: string;
  created_at?: string;
  lesson_number?: Lesson[];
  creator?: User;
  course_comments?: [];
  rating_count?: number;
  rating_sum?: number;
  picture?: string;
}
