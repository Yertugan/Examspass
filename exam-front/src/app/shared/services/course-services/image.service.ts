import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_HOST} from "../service";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  DJANGO_HOST = API_HOST

  constructor(private http: HttpClient) {}

  public updateCourseImage(image: File, course_id: number) {
    const formData = new FormData();

    formData.append('image', image);
    formData.append('course_id', course_id.toString());

    return this.http.post(`${this.DJANGO_HOST}/api/create_course_with_file/`, formData);
  }
}
