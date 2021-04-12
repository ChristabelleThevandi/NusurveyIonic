import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyPagePageRoutingModule } from './survey-page-routing.module';

import { SurveyPagePage } from './survey-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyPagePageRoutingModule
  ],
  declarations: [SurveyPagePage]
})
export class SurveyPagePageModule {}
