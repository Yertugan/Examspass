import {Injectable} from '@angular/core';
import {Lesson} from "../../models/lesson";

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  LESSONS: Lesson[] = [];

  constructor() {
    for (let i = 1; i < 11; ++i) {
      this.LESSONS.push({
          id: i,
          title: 'Introduction',
          video: 'https://www.youtube.com/embed/65GCiSn_yNM',
          lecture_text: 'The writing component of the IELTS exam is designed to assess how you “write a response appropriately, organise ideas and use a range of vocabulary and grammar accurately.” It comprises two tasks and candidates have 60 minutes to answer them.',
          isDone: false,
        }
      );
    }
  }

  getLessons(course_id: number): Promise<Lesson[]> {
    return Promise.resolve(this.LESSONS);
  }

  getCourseName(course_id: number) {
    return Promise.resolve('IELTS for Beginners');
  }
}
