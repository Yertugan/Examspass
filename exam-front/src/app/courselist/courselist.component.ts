import {Component, OnInit} from '@angular/core';
import {CourseService} from "../shared/services/course-services/course.service";
import {Course} from "../shared/models/course";
import {UserService} from '../shared/services/user-services/user.service';
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  loading = false;
  courses: Course[];
  error: string;
  ok: boolean;
  me: any;
  name: string

  constructor(private courseService: CourseService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.currentUserChange.subscribe(value => {
      this.me = value;
      this.name = value.username;
      if (this.name === 'ertugan') {
        this.ok = true;
      }
    })
    if (!this.ok) {
      this.loading = true;
      this.courseService.coursesByRating()
        .then(values => this.courses = values)
        .catch(reason => this.error = reason)
        .finally(() => this.loading = false);
    }
  }
}
