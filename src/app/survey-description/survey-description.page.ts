import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Survey } from '../models/survey';
import { SessionService } from '../services/session.service';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-survey-description',
  templateUrl: './survey-description.page.html',
  styleUrls: ['./survey-description.page.scss'],
})
export class SurveyDescriptionPage implements OnInit {
  submitted: boolean;
  surveyId: number;
  surveyToView: Survey;
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
  }

  ionViewWillEnter() {
    this.refreshSurvey();
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

  answerSurvey() {
    this.router.navigate(["/survey-page/" + this.surveyToView.surveyId]);
  }

  back() {
    this.router.navigate(["/index"]);
  }

}
