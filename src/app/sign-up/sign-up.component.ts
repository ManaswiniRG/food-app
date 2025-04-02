import { Component, inject } from '@angular/core';
import { EmailValidator, FormControl, FormGroup } from '@angular/forms';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  signUpService = inject(SignUpService);

  signupForm = new FormGroup({
    userName: new FormControl(),
    userEmail: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    role: new FormControl(),
  });

  someFun() {}

  signUpUser() {
    console.log(this.signupForm);
    const formvalues = this.signupForm.value;
    this.signUpService.signUpUserApi(formvalues);
    //  = thi
    // s.signupForm.value;
    // this.signUpService.signUpUserApi(formvalues).subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log('Error', error);
    //   }
    // );
  }
}

// http://localhost:3010/api/signup = POST

// {
// userName: 'val',
// password: 'val',
// email: 'val',
// role: 'val',
// }

// email
// :
// "test@gmail.com"
// password
// :
// angular
// role
// :
// "student"
// userName
// :
// test
