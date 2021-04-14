import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCreditCardPage } from './update-credit-card.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCreditCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCreditCardPageRoutingModule {}
