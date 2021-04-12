import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitConfirmationPageRoutingModule } from './submit-confirmation-routing.module';

import { SubmitConfirmationPage } from './submit-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitConfirmationPageRoutingModule
  ],
  declarations: [SubmitConfirmationPage]
})
export class SubmitConfirmationPageModule {}
