import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTagPage } from './update-tag.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTagPageRoutingModule {}
