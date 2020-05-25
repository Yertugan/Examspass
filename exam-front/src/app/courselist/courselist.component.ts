import {Component, OnInit} from '@angular/core';
import {CourseService} from "../shared/services/course-services/course.service";
import {Course} from "../shared/models/course";

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  loading = false;
  courses: Course[];
  error: string;

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.courseService.coursesByRating()
      .then(values => this.courses = values)
      .catch(reason => this.error = reason)
      .finally(() => this.loading = false);
  }
}
