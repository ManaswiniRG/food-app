import { Component } from '@angular/core';

@Component({
  selector: 'app-reservetable',
  standalone: false,
  templateUrl: './reservetable.component.html',
  styleUrl: './reservetable.component.scss'
})
export class ReservetableComponent {
  reserveTable(){
    console.log('This is from restab')
  }

}
