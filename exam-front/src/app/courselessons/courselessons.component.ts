import {Component, Input, OnInit} from '@angular/core';
import {LessonService} from "../shared/services/lesson-services/lesson.service";
import {Lesson} from "../shared/models/lesson";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-courselessons',
  templateUrl: './courselessons.component.html',
  styleUrls: ['./courselessons.component.css']
})
export class CourselessonsComponent implements OnInit {

  @Input('lesson_id') lesson_id: number;

  lessons: Lesson[];
  course_id: number;
  course_name: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private lessonService: LessonService) {
  }

  ngOnInit(): void {
    this.course_id = Number(this.activatedRoute.snapshot.paramMap.get('course_id'));

    this.lessonService.getCourseName(this.course_id).then(value => {
      this.course_name = value;
    })

    this.lessonService.getLessons(this.course_id).then(value => {
      this.lessons = value;
      console.log(this.lessons);
    });

    console.log(this.lesson_id);
  }

}
