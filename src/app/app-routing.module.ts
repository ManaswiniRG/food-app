import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservetableComponent } from './reservetable/reservetable.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UniversityComponent } from './university/university.component';
import { CollegeComponent } from './college/college.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { CourseFormComponent } from './course/course.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reservetable', component: ReservetableComponent },
  { path: 'viewmenu', component: ViewmenuComponent },
  { path: 'contactus', component: ContactusComponent },
  {
    path: 'university',
    loadChildren: () =>
      import('./university/university.module').then((m) => m.UniversityModule),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./games/games.module').then((m) => m.GamesModule),
  },
  { path: 'college', component: CollegeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LogInComponent },
  { path: 'course', component: CourseFormComponent },
  { path: 'food', component: FoodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
