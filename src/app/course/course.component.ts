import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { SignUpService } from '../sign-up.service';
import { Title } from '@angular/platform-browser';
import { CourseService } from '../course.service';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-course',
  standalone: false,
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseFormComponent {
  // courseService = inject(CourseService);

  courseForm = new FormGroup({
    courseId: new FormControl(''),
    title: new FormControl(''),
    price: new FormControl(0),
    categoryType: new FormControl('U_IT'),
    description: new FormControl(''),
  });

  constructor(private courseService: CourseService) {}

  createCourse() {
    const formValues = this.courseForm.value;
    const courseDetails = {
      course_id: formValues.courseId,
      title: formValues.title,
      description: formValues.description,
      price: formValues.price,
      categoryType: formValues.categoryType,
    };
    this.courseService.createCourseApi(courseDetails).subscribe(
      (response) => {
        console.log('Course created successfully:', response);
      },
      (error) => {
        console.log('Error creating course:', error);
      }
    );
  }
}
