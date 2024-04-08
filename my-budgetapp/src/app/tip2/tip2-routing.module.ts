import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tip2Page } from './tip2.page';

const routes: Routes = [
  {
    path: '',
    component: Tip2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tip2PageRoutingModule {}
