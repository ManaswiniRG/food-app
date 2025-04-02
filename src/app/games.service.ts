import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  httpClient = inject(HttpClient)

  gameName: string = 'COD';

  constructor() { }

  fetchgamesData(): Observable<any> {
    return this.httpClient.get('https://www.amiiboapi.com/api/amiibo/?name=mario');


  }
}

