import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  userProfileService = inject(UserProfileService);

  ngOnInit() {
    this.userProfileService.userProfileInfo.subscribe(
      (data) => {
        console.log(data);
        // this.loggedInUserName = data;
      },
      () => {}
    );
  }

  title = 'Our Italian Restraunt';

  restaurantInfo: any = {
    name: 'Our Italian Restraunt',
    phone: '234-567-891',
    cuisine: 'Italian',
    email: 'ourit@icloud.com',
    rating: 4.5,
    address: {
      stNo: '313 Pine street',
      apt: 207,
      city: 'Jerseycity',
      state: 'NJ',
      zip: 32113,
    },
  };
  showHome: boolean = true;
  showReserveTable: boolean = false;
  showViewMenu: boolean = false;
  showContactUs: boolean = false;
  showUniversity: boolean = false;

  customerInfo: any = {
    name: 'Manaswini RG',
    email: 'manu@icloud.com',
    phone: '123-456-7890',
    fav: ['pizza', 'pasta', 'soup'],
  };
}
