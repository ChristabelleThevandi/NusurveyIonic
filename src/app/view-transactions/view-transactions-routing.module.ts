import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTransactionsPage } from './view-transactions.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTransactionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTransactionsPageRoutingModule {}
