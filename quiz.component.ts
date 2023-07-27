import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizData: any[] = [
    {
        "queType":"Main",
        "type":"dropdown",
        "question":"Which company was established in 1976 by Steve Jobs ?",
        "options":["Apple","Microsoft","Atari"],
        "subQue":[
            {
                "queType":"Sub",
                "showIf":"Apple",
                "type":"dropdown",
                "question":"What is the most common way to iterate through an array ?",
                "options":["For loop","If Statements"]
            },
            {
                "queType":"Sub",
                "showIf":"Apple",
                "type":"textinput",
                "question":"Which type of code is represented in 0 and 1 ?",
                "options":[]
            }
        ]
    },
    {
        "queType":"Main",
        "type":"dropdown",
        "question":"What is use for CSS ?",
        "options":["Styling websites","JS logic","Database"]
    }
];

  selectedAnswers: { [key: string]: string } = {};
  selectedSubAnswers: { [key: string]: string } = {};

  constructor() { }

  ngOnInit(): void {
  }
}

