import { Injectable } from '@angular/core';

import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tests = [
      {
        id: 1,
        name: 'Basic',
        type: 'base',
        baseCost: 5,
        consumptionCost: 22
      },
      {
        id: 2,
        name: 'Economy',
        type: 'package',
        baseCost: 800,
        consumptionCost: 30,
        limit: 4000
      },
      {
        id: 3,
        name: 'Premium',
        type: 'base',
        baseCost: 10,
        consumptionCost: 28
      },
      {
        id: 4,
        name: 'Business',
        type: 'package',
        baseCost: 1000,
        consumptionCost: 34,
        limit: 6000
      }
    ];
    return {tests};
  }
}
