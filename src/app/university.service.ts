import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UniversityAPIresponseI } from './university/university-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {


  ht = inject(HttpClient);

  constructor() { }


  fetchUniversities(): Observable<UniversityAPIresponseI[]>{
    console.log('mno');
     const response = this.ht.get<UniversityAPIresponseI[]>('http://universities.hipolabs.com/search?country=United+Kingdom');
    return response;
    
  }
}
