import { Component, OnInit } from '@angular/core';

import {Question, Answer} from "./question";
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
  questionAnswered: boolean = false;
  correctAnswer: boolean;
  answer: Answer;
  answerName: string;
  complete: boolean = false;
  resultStyle: string;
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

  choice(answerId):void {
    this.currentQuestion.answers.forEach((item)=>{
      if(item.answerId === answerId){
        item.active = true;
        this.answer = item;
      }
      else {
        item.active = false;
      }
    });
  }

  checkAnswer(){
    this.correctAnswer = this.currentQuestion.correctAnswerId === this.answer.answerId;
    this.questionAnswered = true;
    this.complete = this.questions.length - 1 === this.activeQuestion;
    if(this.complete){
      this.progress += this.progressCount();
    }
    if(this.correctAnswer){
      this.resultStyle = 'correct'
    }
    else {
      this.resultStyle = 'incorrect'
    }
  }

  nextQuestion():void {
    this.activeQuestion++;
    this.currentQuestion = this.questions[this.activeQuestion];
    this.progress += this.progressCount();
    this.correctAnswer = null;
    this.questionAnswered = false;
    this.resultStyle = '';
  }

  progressCount():number {
    return 100/this.questions.length;
  }

}
