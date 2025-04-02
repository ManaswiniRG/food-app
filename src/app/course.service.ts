import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}
  httpClient = inject(HttpClient);

  createCourseApi(courseDetails: any): Observable<any> {
    console.log(courseDetails);
    return this.httpClient.post(
      'http://localhost:3010/api/createCourse',
      courseDetails
    );
  }
  getCoursesApi(): Observable<any> {
    return this.httpClient.get('http://localhost:3010/api/courses');
  }

  updateCourseApi(courseId: string, courseDetails: any): Observable<any> {
    return this.httpClient.put(
      `http://localhost:3010/api/courses/${courseId}`,
      courseDetails
    );
  }
  deleteCourseApi(courseId: string): Observable<any> {
    return this.httpClient.delete(
      `http://localhost:3010/api/courses/${courseId}`
    );
  }
}
