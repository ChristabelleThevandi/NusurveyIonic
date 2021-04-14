import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { Survey } from '../models/survey';
import { User } from '../models/user';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-view-filled-surveys',
  templateUrl: './view-filled-surveys.page.html',
  styleUrls: ['./view-filled-surveys.page.scss'],
})
export class ViewFilledSurveysPage implements OnInit {

  filledSurveys: Survey[];
  user: User;

  constructor(private router: Router,
    public sessionService: SessionService, public surveyService: SurveyService) {
      this.user = this.sessionService.getCurrentUser();
  }

  ngOnInit() {
    this.refreshFilledSurveys();
  }

  refreshFilledSurveys() {
    if (this.sessionService.getIsLogin()) {
      this.surveyService.retrieveMyFilledSurveys(this.user.email).subscribe(
        response => {
          this.filledSurveys = response;
        },
        error => {
          console.log("**************************** ViewFilledSurveys.ts: " + error);
        }
      );
    }
  }

  back() {
    this.router.navigate(["/index"])
  }

}
