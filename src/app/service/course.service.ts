import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Course} from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  /**
   * setting these headers to be the admin role for now.
   * this is a way of providing addition information to the service and must be place on the request
   * @private
   */
  private headers = new HttpHeaders({
    role: 'admin'
  });

  /**
   * this is the endpoint you need to hit when running the backend on your local machine
   * @private
   */
  private apiUrl = 'http://localhost:8080/courses';

  constructor(private http: HttpClient) { }

  /**
   * the common structure for the http request is (url, body, options)
   */

  /**
   * Fetches and returns an Observable of an array of Course objects.
   * This method should be used for retrieving the full list of courses.
   */
  getCourses(): Observable<Course[]> {
    // TODO: add code here
    return of([]);
  }

  /**
   * HONORS STUDENTS
   * Fetches and returns an Observable of a single Course object.
   * This method should be used when specific details of a course, identified by its id, are needed.
   * @param id
   */
  getCourse(id: number): Observable<Course> {
    // TODO: add code here
    return of({} as Course);
  }

  /**
   * Sends a new Course object to the server and returns an Observable of the created Course
   * @param course
   */
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course, {headers: this.headers});
  }

  /**
   * Deletes a course identified by its id from the server.
   * @param id
   */
  deleteCourse(id: number) {
    // TODO: add code here
    console.log(`deleteCourse called with id: ${id}`);
  }

  /**
   * Updates an existing course with new data and returns an Observable of the updated Course.
   * @param course
   */
  updateCourse(course: Course): Observable<Course> {
    // TODO: add code here
    return of({} as Course);
  }

}
