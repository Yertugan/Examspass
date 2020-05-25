import { Course } from './course';
export interface User {
  id?: number;
  name?: string;
  surname?: string;
  username: string;
  password?: string;
  profile_pic?: string;
  joined_at?: string;
  email?: string;
  purchased_courses?: Course[];
}
