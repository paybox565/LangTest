import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

import {Question} from "./question";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  private questionsUrl = 'api/tests';

  getQuestions():Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl)
        .pipe(
            tap(_ => console.log('questions received'))
        );
  }
}
