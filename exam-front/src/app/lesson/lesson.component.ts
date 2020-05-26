import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ActivationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  lesson_id: number;
  course_id: number;

  @ViewChild('sidenav') sidenav: ElementRef;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.course_id = Number(this.activatedRoute.snapshot.paramMap.get('course_id'));
    this.lesson_id = Number(this.activatedRoute.snapshot.paramMap.get('lesson_id'));

    this.router.events.subscribe(value => {
      if (value instanceof ActivationEnd) {
        this.course_id = Number(value.snapshot.paramMap.get('course_id'));
        this.lesson_id = Number(value.snapshot.paramMap.get('lesson_id'));
      }
    });
  }

}
