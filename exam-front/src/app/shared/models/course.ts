import { User } from './user';
import {Lesson} from "./lesson";

export interface Course {
  id?: number;
  body: string;
  created_at?: string;
  lesson_number?: Lesson[];
  creator?: User;
  coruse_rainig?: [];
  course_comments?: [];
  picture?: string;
}
