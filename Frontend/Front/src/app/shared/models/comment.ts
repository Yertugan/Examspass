import { User } from './user';
import {Course} from './course';

export interface Comment {
  id?: number;
  body: string;
  created_at?: string;
  author?: User;
  course?: Course;
}
