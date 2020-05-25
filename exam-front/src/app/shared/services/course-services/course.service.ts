import {Injectable} from '@angular/core';
import {API_HOST} from "../service";
import {HttpClient} from "@angular/common/http";
import {Course} from "../../models/course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  DJANGO_SERVER = API_HOST;

  constructor(private http: HttpClient) {
  }

  coursesByRating(): Promise<Course[]> {
    return this.http.get(`${this.DJANGO_SERVER}/api/courses/get_sorted_by_rating`).toPromise()
      .then(response => {
        return response as Course[];
      })
  }

  createCourse(course: Course): Promise<Course> {
    return this.http.post(`${this.DJANGO_SERVER}/api/courses/`, course).toPromise()
      .then(response => response as Course);
  }

}
