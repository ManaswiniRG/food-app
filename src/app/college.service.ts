import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UniversityAPIresponseI } from './university/university-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollegeService {
  http = inject(HttpClient);

  fetchByCountry(
    selectedCountryName: string
  ): Observable<UniversityAPIresponseI[]> {
    console.log(selectedCountryName);
    // this.collegeService.fetchByCountry(country);
    const response = this.http.get<UniversityAPIresponseI[]>(
      `http://universities.hipolabs.com/search?country=${selectedCountryName}`
    );
    return response;
  }
}
