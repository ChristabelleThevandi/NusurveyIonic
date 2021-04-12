import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitConfirmationPage } from './submit-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: SubmitConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitConfirmationPageRoutingModule {}
