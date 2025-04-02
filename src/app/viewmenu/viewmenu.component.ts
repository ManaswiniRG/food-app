import { Component } from '@angular/core';

@Component({
  selector: 'app-viewmenu',
  standalone: false,
  templateUrl: './viewmenu.component.html',
  styleUrl: './viewmenu.component.scss'
})
export class ViewmenuComponent {
  viewMenu(){
    console.log('This is from view')
  }
}
