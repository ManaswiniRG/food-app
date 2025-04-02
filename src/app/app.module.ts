import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservetableComponent } from './reservetable/reservetable.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { ContactusComponent } from './contactus/contactus.component';
import { provideHttpClient } from '@angular/common/http';
import { UniversityComponent } from './university/university.component';
import { HeaderComponent } from './header/header.component';
import { CollegeComponent } from './college/college.component';
import { CollegeTableComponent } from './college-table/college-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { CourseFormComponent } from './course/course.component';
import { UdemyComponent } from './udemy/udemy.component';
import { FoodComponent } from './food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservetableComponent,
    ViewmenuComponent,
    ContactusComponent,
    HeaderComponent,
    CollegeComponent,
    CollegeTableComponent,
    SignUpComponent,
    LogInComponent,
    CourseFormComponent,
    UdemyComponent,
    FoodComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
