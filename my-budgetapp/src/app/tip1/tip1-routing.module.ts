import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tip1Page } from './tip1.page';

const routes: Routes = [
  {
    path: '',
    component: Tip1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tip1PageRoutingModule {}
