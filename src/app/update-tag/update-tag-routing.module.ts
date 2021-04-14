import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTagPage } from './update-tag.page';

import { IonicSelectableModule } from 'ionic-selectable';

const routes: Routes = [
  {
    path: '',
    component: UpdateTagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),IonicSelectableModule],
  exports: [RouterModule],
})
export class UpdateTagPageRoutingModule {}
