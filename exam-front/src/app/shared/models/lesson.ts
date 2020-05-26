import { Course } from './course';

export interface Lesson {
  id?: number;
  title?: string;
  video?: string;
  lecture_text?: string;
  my_course?: Course;
  lecture_files?: [];
  isDone?: boolean;
}
