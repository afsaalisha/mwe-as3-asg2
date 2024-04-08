import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tip3PageRoutingModule } from './tip3-routing.module';

import { Tip3Page } from './tip3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tip3PageRoutingModule
  ],
  declarations: [Tip3Page]
})
export class Tip3PageModule {}
