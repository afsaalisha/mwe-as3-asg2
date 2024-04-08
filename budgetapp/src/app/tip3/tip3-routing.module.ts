import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tip3Page } from './tip3.page';

const routes: Routes = [
  {
    path: '',
    component: Tip3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tip3PageRoutingModule {}
