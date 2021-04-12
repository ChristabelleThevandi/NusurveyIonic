import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTransactionsPageRoutingModule } from './view-transactions-routing.module';

import { ViewTransactionsPage } from './view-transactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTransactionsPageRoutingModule
  ],
  declarations: [ViewTransactionsPage]
})
export class ViewTransactionsPageModule {}
