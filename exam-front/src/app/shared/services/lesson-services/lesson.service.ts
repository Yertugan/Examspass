import {Injectable} from '@angular/core';
import {Lesson} from '../../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  LESSONS: Lesson[] = [];

  constructor() {
    this.LESSONS.push({
        id: 1,
        title: 'Урок1',
        video: 'https://www.youtube.com/embed/65GCiSn_yNM',
        lecture_text: 'The writing component of the IELTS exam is designed to assess how you “write a response appropriately, organise ideas and use a range of vocabulary and grammar accurately.” It comprises two tasks and candidates have 60 minutes to answer them.',
        isDone: false,
      }
    );
    this.LESSONS.push({
        id: 2,
        title: 'Урок2',
        video: 'https://www.youtube.com/embed/65GCiSn_yNM',
        lecture_text: 'The IELTS Listening test will take about 30 minutes, and you will have an extra 10 minutes to transfer your answers to the answer sheet.',
        isDone: false,
      }
    );
  }

  getLessons(course_id: number): Promise<Lesson[]> {
    return Promise.resolve(this.LESSONS);
  }

  getCourseName(course_id: number) {
    return Promise.resolve('IELTS for Beginners');
  }
}
