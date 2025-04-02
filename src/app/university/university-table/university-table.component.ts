import { Component, inject } from '@angular/core';
import { UniversityService } from '../../university.service';
import { UniversityAPIresponseI } from '../university-interface';

@Component({
  selector: 'app-university-table',
  standalone: false,
  templateUrl: './university-table.component.html',
  styleUrl: './university-table.component.scss'
})
export class UniversityTableComponent {

  uni = inject(UniversityService);
  universityList: UniversityAPIresponseI[] = [];

  constructor(){
    this.getUniversityDetails();
  }
  getUniversityDetails(): void{
    console.log('univdet');
    this.uni.fetchUniversities().subscribe(
      (response: UniversityAPIresponseI[]) =>{
        console.log(response);
        let updatedUniversitieList: UniversityAPIresponseI[] = [];

        response.forEach((university) => {
          university.review = 'Good';
          updatedUniversitieList.push(university);

          // if(university.web_pages.length > 1){
          //   console.log('Good');
          //   updatedUniversitieList.push({...university, review: 'Good'})
          // } else {
          //   console.log('Avg');
          //   updatedUniversitieList.push({...university, review: 'Avg'})
          // }
          // console.log(updatedUniversitieList);
      })
        this.universityList = updatedUniversitieList;
        console.log(this.universityList);

      },
      (error:any) => {
        console.log(error);

      }
    )


  }

}
