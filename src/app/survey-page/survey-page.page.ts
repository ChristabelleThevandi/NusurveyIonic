import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AnswerWrapper } from '../models/answer-wrapper';
import { CheckboxAnswer } from '../models/checkbox-answer';
import { CheckboxOption } from '../models/checkbox-option';
import { MultipleChoiceAnswer } from '../models/multiple-choice-answer';
import { MultipleChoiceOption } from '../models/multiple-choice-option';
import { QuestionType } from '../models/question-type.enum';
import { QuestionWrapper } from '../models/question-wrapper';
import { SliderAnswer } from '../models/slider-answer';
import { SliderOption } from '../models/slider-option';
import { Survey } from '../models/survey';
import { User } from '../models/user';
import { SurveyResponse } from '../models/surveyResponse';
import { TextAnswer } from '../models/text-answer';
import { TextOption } from '../models/text-option';
import { ResponseService } from '../services/response.service';
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
  resultError: boolean;
  message: string;
  user : User;

  constructor(private router: Router,
    public sessionService: SessionService, public responseService: ResponseService, public surveyService: SurveyService, public alertController: AlertController, private activatedRoute: ActivatedRoute) {
    this.submitted = false;
    this.retrieveSurveyError = false;
    this.error = false;
    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit() {
    this.surveyId = parseInt(this.activatedRoute.snapshot.paramMap.get('surveyId'));

    this.refreshSurvey();
  }

  ionViewWillEnter() {
    this.refreshSurvey();
  }

  makeAnswerWrappers() {
    this.questionWrappers = this.surveyToView.questionWrappers;
    for (var qw of this.questionWrappers) {
      let answerWrapper = new AnswerWrapper();
      answerWrapper.questionWrapper = qw;
      qw.answerWrappers.push(answerWrapper);
      if (qw.question.mcq) {
        answerWrapper.multipleChoiceAnswer = new MultipleChoiceAnswer();
        answerWrapper.multipleChoiceAnswer.optionChosen = new MultipleChoiceOption();
        answerWrapper.multipleChoiceAnswer.answerWrapper = answerWrapper;
      } else if (qw.question.checkbox) {
        answerWrapper.checkboxAnswer = new CheckboxAnswer();
        answerWrapper.checkboxAnswer.optionsGiven = new Array();
        answerWrapper.checkboxAnswer.answerWrapper = answerWrapper;
      } else if (qw.question.slider) {
        answerWrapper.sliderAnswer = new SliderAnswer();
        answerWrapper.sliderAnswer.optionGiven = new SliderOption();
        answerWrapper.sliderAnswer.answerWrapper = answerWrapper;
      } else if (qw.question.text) {
        answerWrapper.textAnswer = new TextAnswer();
        answerWrapper.textAnswer.answerGiven = new TextOption();
        answerWrapper.textAnswer.answerWrapper = answerWrapper;
      }
    }
  }

  refreshSurvey() {
    this.surveyService.getSurveyBySurveyId(this.surveyId).subscribe(
      response => {
        this.surveyToView = response;
        console.log(response);
        this.makeAnswerWrappers();
      },
      error => {
        this.retrieveSurveyError = true;
        console.log("****************** SurveyDescription.ts: " + error);
      }
    );
  }

  update(answerSurveyForm: NgForm) {
    let responseToSend = new SurveyResponse();
    responseToSend.answerWrappers = new Array();
    for (let qw of this.questionWrappers) {
      responseToSend.answerWrappers.push(qw.answerWrappers[qw.answerWrappers.length - 1]);
    }

    responseToSend.survey = this.surveyToView;
    responseToSend.surveyee = this.sessionService.getCurrentUser();

    for (let aw of responseToSend.answerWrappers) {
      aw.questionWrapperId = aw.questionWrapper.id;
      if (aw.questionWrapper.question.mcq) {
        for (let mcqoption of aw.questionWrapper.mcq) {
          if (mcqoption.content === aw.multipleChoiceAnswer.optionChosenString) {
            aw.multipleChoiceAnswer.optionChosen = mcqoption;
            break;
          }
        }
        aw.multipleChoiceAnswer.answerWrapper = null;
      } else if (aw.questionWrapper.question.checkbox) {
        for (let checkboxOption of aw.questionWrapper.checkbox) {
          if (checkboxOption.isSelected) {
            aw.checkboxAnswer.optionsGiven.push(checkboxOption);
          }
          checkboxOption.isSelected = false;
        }
        aw.checkboxAnswer.numChecked = aw.checkboxAnswer.optionsGiven.length;
        aw.checkboxAnswer.answerWrapper = null;
      } else if (aw.questionWrapper.question.slider) {
        aw.sliderAnswer.optionGiven = aw.questionWrapper.slider;
        aw.sliderAnswer.answerWrapper = null;
      } else if (aw.questionWrapper.question.text) {
        aw.textAnswer.answerGiven = aw.questionWrapper.text;
        aw.textAnswer.answerWrapper = null;
      }
      aw.questionWrapper = null;
    }


    this.submitted = true;

    if (answerSurveyForm.valid) {
      this.responseService.createResponse(responseToSend).subscribe(
        response => {
          this.resultSuccess = true;
          this.resultError = false;
          this.message = response;
          this.message = "Response sent successfully";
          this.router.navigate(["/survey-result"]);
          this.user = this.sessionService.getCurrentUser();
          this.user.creditCard.balance += this.surveyToView.price_per_response;
          this.sessionService.setCurrentUser(this.user);
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the response: " + error;

          console.log('********** SurveyPage.ts: ' + error);
        }
      );
    }
  }

  back() {
    this.router.navigate(["/survey-description/" + this.surveyId]);
  }

}
