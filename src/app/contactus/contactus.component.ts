import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  standalone: false,
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {
  contactUs(){
    console.log('This is from conus')
  }

}
