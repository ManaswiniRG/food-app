import { Component, inject } from '@angular/core';
import { HomeService } from '../home.service';
import {
  CourseI,
  VehichleApiresponseI,
  VehichleDetailsI,
} from './home-interfaces';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  name: string = 'API Topic';

  hs = inject(HomeService);
  vehichleList: VehichleDetailsI[] = [];

  courseL: string[] = ['Angular', 'React', 'Vue'];
  course: any = {
    name: 'Node',
    id: 's_01',
  };
  //this.course.name
  courseList = [
    { name: 'Angular', version: 19 },
    { name: 'React', version: 18 },
    { name: 'Vue', version: 4 },
  ];

  changeTopicName() {
    this.name = 'Routing Topic';
  }

  updateCourseList() {
    // console.log(this.course)
    // this.course.name = 'Node js';
    // this.course.price = 10;
    // console.log(this.course)
    console.log(this.courseList);
    let newObj = { name: 'MongoBD', version: 6 };
    this.courseList.unshift(newObj);
    console.log(this.courseList);
  }

  home() {
    console.log('This is from home');
  }
  getDetails(id: string, price: number) {
    // this.course.price = 20;
    this.course['price'] = 20;
    // for(let i=0; i<= this.courseList.length; i++){
    //   console.log(this.courseList[i]);
    // }
    this.courseL.forEach((course) => {
      console.log(course);
    });
  }

  search(): void {
    console.log('abc');
    this.hs.fetchData().subscribe(
      (response: VehichleApiresponseI) => {
        console.log(response);
        this.vehichleList = response.Results;
        console.log(this.vehichleList);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
