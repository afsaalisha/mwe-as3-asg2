import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tip1PageRoutingModule } from './tip1-routing.module';

import { Tip1Page } from './tip1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tip1PageRoutingModule
  ],
  declarations: [Tip1Page]
})
export class Tip1PageModule {}
