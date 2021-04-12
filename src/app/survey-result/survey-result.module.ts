import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyResultPageRoutingModule } from './survey-result-routing.module';

import { SurveyResultPage } from './survey-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyResultPageRoutingModule
  ],
  declarations: [SurveyResultPage]
})
export class SurveyResultPageModule {}
