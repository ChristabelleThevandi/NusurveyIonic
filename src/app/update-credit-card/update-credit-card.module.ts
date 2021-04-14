import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCreditCardPageRoutingModule } from './update-credit-card-routing.module';

import { UpdateCreditCardPage } from './update-credit-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCreditCardPageRoutingModule
  ],
  declarations: [UpdateCreditCardPage]
})
export class UpdateCreditCardPageModule {}
