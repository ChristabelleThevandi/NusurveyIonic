import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewFilledSurveysPage } from './view-filled-surveys.page';

const routes: Routes = [
  {
    path: '',
    component: ViewFilledSurveysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewFilledSurveysPageRoutingModule {}
