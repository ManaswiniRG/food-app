import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
  constructor() {}

  httpclient = inject(HttpClient);

  logInUserApi(LogInFormDetails: any) {
    console.log(LogInFormDetails);
  }
}
