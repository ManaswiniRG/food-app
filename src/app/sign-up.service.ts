import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor() {}

  httpClient = inject(HttpClient);

  signUpUserApi(signupFormDetails: any) {
    console.log(signupFormDetails);
    this.httpClient.post('http://localhost:3010/api/signup', signupFormDetails);
  }

  loginUserApi(userInfo: any) {
    return this.httpClient.post('http://localhost:3010/api/login', userInfo);
  }
}
