import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { Survey } from '../models/survey';
import { SurveyService } from '../services/survey.service';
import { User } from '../models/user';
import { FacultyType } from '../models/faculty-type.enum';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  submitted: boolean;
  recommendedSurveys: Survey[];
  originalSurveys: Survey[];
  user : User;


  constructor(private router: Router,
    public sessionService: SessionService, public surveyService: SurveyService) {
    this.submitted = false;
    this.user = this.sessionService.getCurrentUser();
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
          this.originalSurveys = response;
        },
        error => {
          console.log("**************************** IndexPage.ts: " + error);
        }
      );
    }
  }

  searchSurveysByTitle(event: any) {
    this.recommendedSurveys = this.originalSurveys;
    const val = event.target.value;

    if(val && val.trim() !== '') {
      this.recommendedSurveys = this.recommendedSurveys.filter((survey) => {
        return (survey.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  sortByDateAsc() {
    this.recommendedSurveys = this.originalSurveys;
    this.recommendedSurveys.reverse();
  }

  viewSurveyDetails(event, survey) {
    this.router.navigate(["/survey-description/" + survey.surveyId]);
  }

  back() {
    this.router.navigate(["/index"]);
  }

}
