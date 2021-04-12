import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyDescriptionPage } from './survey-description.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyDescriptionPageRoutingModule {}
