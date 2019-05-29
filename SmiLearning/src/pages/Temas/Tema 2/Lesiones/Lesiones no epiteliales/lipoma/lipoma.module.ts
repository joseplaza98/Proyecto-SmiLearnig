import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LipomaPage } from './lipoma';

@NgModule({
  declarations: [
    LipomaPage,
  ],
  imports: [
    IonicPageModule.forChild(LipomaPage),
  ],
})
export class LipomaPageModule {}
