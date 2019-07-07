import { Component, OnInit } from '@angular/core';

import {Question} from "./question";
import {QuestionsService} from "./questions.service";

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  questions: Question[];
  activeQuestion: number = 0;
  currentQuestion: Question;
  progress: number = 0;
  warnText: string;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    // Just for showing button disabled timer
    setTimeout(() => {
      this.getQuestions();
    }, 500);
  }

  getQuestions(): void {
    this.questionsService.getQuestions()
        .subscribe(questions => {
            this.questions = questions;
            this.currentQuestion = this.questions[this.activeQuestion];
          },
            error=> this.warnText = error.body.error
        );
  }

  nextQuestion():void {
    this.activeQuestion++;
    this.currentQuestion = this.questions[this.activeQuestion];
    this.progress += this.progressCount();
  }

  progressCount():number {
    return 100/this.questions.length;
  }

}
