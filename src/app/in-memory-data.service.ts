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
        title: 'Apple',
        type: 'picture',
        correctAnswerId: 2,
        answers: [
          {
            answerId: 1,
            image: 'assets/img/mango.png'
          },
          {
            answerId: 2,
            image: 'assets/img/apple.png'
          },
          {
            answerId: 3,
            image: 'assets/img/pineapple.png'
          },
          {
            answerId: 4,
            image: 'assets/img/banan.png'
          }
        ]
      },
      {
        id: 2,
        title: 'Заполните пропуск',
        type: 'gap',
        correctAnswerId: 2,
        answers: [
          {
            answerId: 1,
            name: 'are'
          },
          {
            answerId: 2,
            name: 'is'
          },
          {
            answerId: 3,
            name: 'am'
          }
        ]
      },
    ];
    return {tests};
  }
}
