import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Course} from '../../models/course';
import { Comments } from '../../models/comments';
import {Lesson} from '../../models/lesson';
import {API_HOST} from "../service";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User;
  public currentUserChange: BehaviorSubject<User> = new BehaviorSubject(this.currentUser);
  DJANGO_SERVER = API_HOST;

  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post(`${this.DJANGO_SERVER}/auth/register/`, user);
  }

  // User api ..................................................................................................
  getCurrentUser(): Promise<User> {
    return this.http.get<User>(`${this.DJANGO_SERVER}/auth/auth1/me`).toPromise();
  }
  createUser(input: FormData): Promise<User> {
    return this.http.post<User>(`${this.DJANGO_SERVER}/auth/register/`, input).toPromise();
  }

  updateUser(input: FormData, id: string): Promise<User> {
    return this.http.put<User>(`${this.DJANGO_SERVER}/admin/auth1/mainuser/${id}/change/`, input).toPromise();
  }

  deleteUser(id: string) {
    return this.http.delete<User>(`${this.DJANGO_SERVER}/api/users/${id}`).toPromise();
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
    this.currentUserChange.next(this.currentUser);
  }

  destroyCurrentUser() {
    this.currentUser = undefined;
    localStorage.removeItem('token');
    this.currentUserChange.next(this.currentUser);
  }

  getUserProfile(): Promise<User> {
    return this.http.get<User>(`${this.DJANGO_SERVER}/api/current`).toPromise();
  }

  // ..................................................................................................

  // Course Get requestsssssssss
  getSearchedCourses(word: string): Promise<Course[]>{
    return this.http.get<Course[]>(`${this.DJANGO_SERVER}/api/users/${word}/followers`).toPromise();
  }
  getUserCourses(user_id: number): Promise<Course[]>{
    return this.http.get<Course[]>(`${this.DJANGO_SERVER}/api/users/${user_id}/followers`).toPromise();
  }
  getCourseInfo(course_id: number): Promise<Course>{
    return this.http.get<Course>(`${this.DJANGO_SERVER}/api/users/${course_id}/followers`).toPromise();
  }
  getCourseLessons(course_id: number): Promise<Lesson[]>{
    return this.http.get<Lesson[]>(`${this.DJANGO_SERVER}/api/users/${course_id}/followers`).toPromise();
  }

  createLesson(input: FormData, course_id: number): Promise<Lesson> {
    return this.http.post<Lesson>(`${this.DJANGO_SERVER}/api/users/`, input).toPromise();
  }
  updateLesson(input: FormData, course_id: number, lesson_id: number): Promise<Lesson> {
    return this.http.put<Lesson>(`${this.DJANGO_SERVER}/api/users/${lesson_id}/`, input).toPromise();
  }


  //Course post Requestsssssssssssssss

  postCourseComment(course_id: number , input: FormData): Promise<Comments>{
    return this.http.post<Comments>(`${this.DJANGO_SERVER}/api/users/`, input).toPromise();
  }
}
