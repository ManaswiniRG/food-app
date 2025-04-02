import { Component, inject } from '@angular/core';
import { GamesService } from '../games.service';
import { GameI } from './games-interface';

@Component({
  selector: 'app-games',
  standalone: false,
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss',
})
export class GamesComponent {
  gamesService = inject(GamesService);

  gamesList: GameI[] = [];

  constructor() {
    this.getGames();
  }

  getGames() {
    this.gamesService.fetchgamesData().subscribe(
      (gamesResponse) => {
        console.log(gamesResponse);
        this.gamesList = gamesResponse['amiibo'];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

// name: any;

// // result: number = 0;
// gameService = inject(GamesService)

// constructor(){
//   this.fetchGames();
//   this.add(1, 2);
//   this.name = 10;
//   this.name = 'Ang';

// }
// fetchGames(){
//   // this.gameService;
// }

//   add(n1: number, n2: number) {
//     //let const var
//     const result: number = n1+n2;
//     console.log(result)

//   }
