import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { Survey } from '../models/survey';
import { SurveyService } from '../services/survey.service';
import { User } from '../models/user';
import { FacultyType } from '../models/faculty-type.enum';
import { UserService } from '../services/user.service';

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
    public sessionService: SessionService, public surveyService: SurveyService, public userService : UserService) {
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

  // refreshUser() {
  //   let email = this.sessionService.getCurrentUser().email;
  //   let password = this.sessionService.getCurrentUser().password;
  //   this.userService.userLogin(email, password).subscribe(
  //     response => {
  //       let user: User = response;

  //       if (user != null) {
  //         this.sessionService.setCurrentUser(user);
  //         this.sessionService.setEmail(email);
  //         this.sessionService.setPassword(password);
  //       }
  //     },
  //     error => {

  //     }
  //   );
  //   console.log(this.sessionService.getCurrentUser().creditCard)
  // }

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
