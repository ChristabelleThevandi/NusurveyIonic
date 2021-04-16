import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.page.html',
  styleUrls: ['./survey-result.page.scss'],
})
export class SurveyResultPage implements OnInit {

  constructor(private router: Router,public alertController: AlertController) { }

  ngOnInit() {
  }

  filledSurvey() {
    this.router.navigate(["/view-filled-surveys"]);
  }

  answerSurvey() {
    this.router.navigate(["/view-transactions"]);
  }

}
