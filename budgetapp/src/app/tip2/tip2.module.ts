import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tip2PageRoutingModule } from './tip2-routing.module';

import { Tip2Page } from './tip2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tip2PageRoutingModule
  ],
  declarations: [Tip2Page]
})
export class Tip2PageModule {}
