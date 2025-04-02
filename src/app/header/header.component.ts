import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from '../user-profile.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  router = inject(Router);
  userProfileService = inject(UserProfileService);

  cartService = inject(CartService);

  loggedInUserName: string;
  noOfItemsAddedToCart: number = 0;

  name = 'Angular';

  navItems: any[] = [
    { routePath: 'home', label: 'Home' },
    { routePath: 'reservetable', label: 'Reserve Table' },
    { routePath: 'viewmenu', label: 'View Menu' },
    { routePath: 'contactus', label: 'Contact Us' },
    { routePath: 'university', label: 'University' },
    { routePath: 'games', label: 'Games' },
    { routePath: 'college', label: 'College' },
    { routePath: 'signup', label: 'Signup' },
    { routePath: 'login', label: 'Login' },
    { routePath: 'course', label: 'Course' },
    { routePath: 'food', label: 'Food' },
  ];

  ngOnInit() {
    this.userProfileService.userProfileInfo.subscribe(
      (data) => {
        console.log(data);
        this.loggedInUserName = data;
      },
      () => {}
    );

    this.cartService.gamesListBs.subscribe(
      (games) => {
        console.log(games);
        this.noOfItemsAddedToCart = games.length;
      },
      () => {}
    );
  }

  runFunction() {
    this.name = 'React';
  }
  // getUserName(){
  //   this.loggedInUserName = this.userProfileService.userName;

  // }
}

//   navigateTo(path: string) {
//     console.log('home');
//     // this.showReserveTable = false;
//     // this.showHome = true;
//     // this.showViewMenu = false;
//     // this.showContactUs = false;
//     this.router.navigate([path]);
//   }

//   this.CartService.gamesListBs.subscribe(
//     games
//   )
// }
// // onReserveTable(){
// //   console.log('restab')
// //   // this.showReserveTable = true;
// //   // this.showHome = false;
// //   // this.showViewMenu = false;
// //   // this.showContactUs = false;
// //   this.router.navigate(['reservetable']);

// // }
// // onViewMenu() {
// //   console.log('vime')
// //   // this.showViewMenu = true;
// //   // this.showReserveTable = false;
// //   // this.showHome = false;
// //   // this.showContactUs = false;
// //   this.router.navigate(['viewmenu']);

// // }
// // onContactUs(){
// //   console.log('conus')
// //   // this.showContactUs = true;
// //   // this.showReserveTable = false;
// //   // this.showViewMenu = false;
// //   // this.showHome = false;
// //   this.router.navigate(['contactus']);

// // }
// // onUniversity(){
// //   console.log('univ')
// //   // this.showViewMenu = true;
// //   // this.showReserveTable = false;
// //   // this.showHome = false;
// //   // this.showContactUs = false;
// //   this.router.navigate(['university']);

// // }
// // navigateToGames(){
// //   this.router.navigate(['games']);

// // }

// // }

// // course: any = {
// //   name: 'Angular',
// //   id: 9,
// //   fee: 50

// // }
// // someFun(){
// //   // {...this.course, fee: 100}

// // }
