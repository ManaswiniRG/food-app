// import { Component, Input } from '@angular/core';
// import { GameI } from '../games-interface';

// @Component({
//   selector: 'app-game-card',
//   standalone: false,
//   templateUrl: './game-card.component.html',
//   styleUrl: './game-card.component.scss',
// })
// export class GameCardComponent {
//   @Input() incomingGame: GameI;
// }
import { Component, inject, Input } from '@angular/core';
import { GameI } from '../games-interface';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-game-card',
  standalone: false,
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  @Input() incomingGame: GameI;

  cartService = inject(CartService);

  addToCart(game: GameI) {
    this.cartService.updateGameToCart(game);
  }
}
