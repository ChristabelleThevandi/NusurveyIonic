import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewFilledSurveysPageRoutingModule } from './view-filled-surveys-routing.module';

import { ViewFilledSurveysPage } from './view-filled-surveys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewFilledSurveysPageRoutingModule
  ],
  declarations: [ViewFilledSurveysPage]
})
export class ViewFilledSurveysPageModule {}
