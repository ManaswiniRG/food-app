import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { VehichleApiresponseI } from './home/home-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  ht = inject(HttpClient)


  constructor() { }

  fetchData(): Observable<VehichleApiresponseI>{
    console.log('xyz');
    const response = this.ht.get<VehichleApiresponseI>('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json');
    return response;

  }
}

//  C - create - post
  //  R - retrieve - get
  //  U - update - put
  //  D - delete - delete
  // CRUD Functionalities - http methods
  //  https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json- "get call"
