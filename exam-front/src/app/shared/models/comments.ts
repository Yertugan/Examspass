import { User } from './user';


export interface Comments {
  id?: number;
  body: string;
  created_at?: string;
  author?: User;
}
