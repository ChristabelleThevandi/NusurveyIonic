import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTagPageRoutingModule } from './update-tag-routing.module';

import { UpdateTagPage } from './update-tag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTagPageRoutingModule
  ],
  declarations: [UpdateTagPage]
})
export class UpdateTagPageModule {}
