import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Survey } from '../models/survey';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  submitted: boolean;
  recommendedSurveys: Survey[];

  constructor(private router: Router,
    public sessionService: SessionService, public surveyService: SurveyService) {
    this.submitted = false;
  }

  ngOnInit() {
    this.refreshSurveys();
  }

  ionViewWillEnter() {
    this.refreshSurveys();
  }

  refreshSurveys() {
    if (this.sessionService.getIsLogin()) {
      this.surveyService.getRecommendation(this.sessionService.getCurrentUser()).subscribe(
        response => {
          this.recommendedSurveys = response;
        },
        error => {
          console.log("**************************** IndexPage.ts: " + error);
        }
      );
    }
  }

  viewSurveyDetails(event, survey) {
    this.router.navigate(["/survey-description/" + survey.surveyId]);
  }

  back() {
    this.router.navigate(["/index"]);
  }

}
