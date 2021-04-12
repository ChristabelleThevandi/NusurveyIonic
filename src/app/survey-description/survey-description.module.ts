import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyDescriptionPageRoutingModule } from './survey-description-routing.module';

import { SurveyDescriptionPage } from './survey-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurveyDescriptionPageRoutingModule
  ],
  declarations: [SurveyDescriptionPage]
})
export class SurveyDescriptionPageModule {}
