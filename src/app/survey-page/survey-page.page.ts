import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AnswerWrapper } from '../models/answer-wrapper';
import { CheckboxAnswer } from '../models/checkbox-answer';
import { CheckboxOption } from '../models/checkbox-option';
import { MultipleChoiceAnswer } from '../models/multiple-choice-answer';
import { MultipleChoiceOption } from '../models/multiple-choice-option';
import { QuestionWrapper } from '../models/question-wrapper';
import { SliderAnswer } from '../models/slider-answer';
import { SliderOption } from '../models/slider-option';
import { Survey } from '../models/survey';
import { TextAnswer } from '../models/text-answer';
import { TextOption } from '../models/text-option';
import { SessionService } from '../services/session.service';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-survey-page',
  templateUrl: './survey-page.page.html',
  styleUrls: ['./survey-page.page.scss'],
})
export class SurveyPagePage implements OnInit {
  submitted: boolean;
  surveyId: number;
  surveyToView: Survey;
  questionWrappers: QuestionWrapper[];
  retrieveSurveyError: boolean;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;

  constructor(private router: Router,
    public sessionService: SessionService, public surveyService: SurveyService, public alertController: AlertController, private activatedRoute: ActivatedRoute) {
    this.submitted = false;
    this.retrieveSurveyError = false;
    this.error = false;
    this.resultSuccess = false;
  }

  ngOnInit() {
    this.surveyId = parseInt(this.activatedRoute.snapshot.paramMap.get('surveyId'));

    this.refreshSurvey();
    this.makeAnswerWrappers();
  }

  ionViewWillEnter() {
    this.refreshSurvey();
  }

  makeAnswerWrappers() {
    this.questionWrappers = this.surveyToView.questionWrappers;
    for (var qw of this.questionWrappers) {
      let answerWrapper = new AnswerWrapper();
      answerWrapper.questionWrapper = qw;
      qw.answerWrapper.push(answerWrapper);
      answerWrapper.multipleChoiceAnswer = new MultipleChoiceAnswer();
      answerWrapper.checkboxAnswer = new CheckboxAnswer();
      answerWrapper.sliderAnswer = new SliderAnswer();
      answerWrapper.textAnswer = new TextAnswer();

      answerWrapper.multipleChoiceAnswer.optionChosen = new MultipleChoiceOption();
      answerWrapper.sliderAnswer.optionGiven = new SliderOption();
      answerWrapper.textAnswer.answerGiven = new TextOption();
      answerWrapper.checkboxAnswer.optionsGiven = new Array();

      answerWrapper.multipleChoiceAnswer.answerWrapper = answerWrapper;
      answerWrapper.sliderAnswer.answerWrapper = answerWrapper;
      answerWrapper.checkboxAnswer.answerWrapper = answerWrapper;
      answerWrapper.textAnswer.answerWrapper = answerWrapper;
    }
  }

  refreshSurvey() {
    this.surveyService.getSurveyBySurveyId(this.surveyId).subscribe(
      response => {
        this.surveyToView = response;
        console.log(response);
      },
      error => {
        this.retrieveSurveyError = true;
        console.log("****************** SurveyDescription.ts: " + error);
      }
    );
  }


  back() {
    this.router.navigate(["/survey-description/" + this.surveyId]);
  }

}
