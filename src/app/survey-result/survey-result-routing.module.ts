import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyResultPage } from './survey-result.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyResultPageRoutingModule {}
