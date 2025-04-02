import { Component, inject } from '@angular/core';
import { CollegeService } from '../college.service';
import { UniversityAPIresponseI } from '../university/university-interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-college',
  standalone: false,
  templateUrl: './college.component.html',
  styleUrl: './college.component.scss',
})
export class CollegeComponent {
  collegeService = inject(CollegeService);
  collegeList: UniversityAPIresponseI[] = [];
  errorMessage = 'Something went wrong';
  iserror: boolean = false;
  selectedCountryName = '';

  searchForm = new FormGroup({
    countryName: new FormControl('', [Validators.required]),
    // cityName: new FormControl(),
  });

  searchByCountry() {
    console.log(this.searchForm);
    console.log(this.searchForm.value);
    console.log(this.searchForm.value.countryName);

    // fetchUniversitiesByCountry(country: string) {
    //   this.iserror = false;
    //   console.log(country);
    //   // this.selectedCountryName = country;

    this.collegeService
      .fetchByCountry(this.searchForm.value.countryName)
      .subscribe(
        (response: UniversityAPIresponseI[]) => {
          console.log(response);
          this.collegeList = response;
        },
        (error) => {
          console.log(error);
          this.iserror = true;
          this.collegeList = [];
        }
      );
  }
}
// {
// https://fastly.picsum.photos/id/135/200/300.jpg?hmac=d3sTOCUkxdC1OKCgh9wTPjck-gMWATyVHFvflla5vLI
//   POST
//   useeName: 'some value';
//   userEmail: 'some value';
//   password: 'some value';
//   confirmPassword: 'some value';
//   role: 'some value';
// }
