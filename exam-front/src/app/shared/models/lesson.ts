import { Course } from './course';

export interface Lesson {
  id?: number;
  lecture_text?: string;
  my_course?: Course;
  lecture_files?: [];
  isDone?: number;
}
