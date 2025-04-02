import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  // userName = '';
  //bs
  private userProfileName = new BehaviorSubject<string>('');
  userProfileInfo = this.userProfileName.asObservable();

  constructor() {}

  updateUserName(loggedInUser: string) {
    // this.userName = loggedInUser;
    this.userProfileName.next(loggedInUser);
  }
}
