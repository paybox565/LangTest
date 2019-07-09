import { Component, OnInit, Input } from '@angular/core';

import {QuestionsService} from "../lessons/questions.service";
import {Answer, Question} from "../lessons/question";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Input() questionType: string;
  answer: Answer;

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
  }

  choice(answerId):void {
    this.question.answers.forEach((item)=>{
      if(item.answerId === answerId){
        item.active = true;
        this.answer = item;
        this.questionsService.changeAnswer(answerId);
      }
      else {
        item.active = false;
      }
    });
  }

}
