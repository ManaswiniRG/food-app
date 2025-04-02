import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameI } from './games/games-interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  gamesCartList = new BehaviorSubject<GameI[]>([]);
  gamesListBs = this.gamesCartList.asObservable();

  constructor() {}

  updateGameToCart(game: GameI) {
    const list = this.gamesCartList.value;
    list.push(game);
    console.log(game);
    this.gamesCartList.next(list);
  }
}
