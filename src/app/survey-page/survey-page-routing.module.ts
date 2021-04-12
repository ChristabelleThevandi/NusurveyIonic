import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyPagePage } from './survey-page.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyPagePageRoutingModule {}
