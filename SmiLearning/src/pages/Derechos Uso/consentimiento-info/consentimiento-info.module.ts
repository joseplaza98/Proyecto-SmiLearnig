import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsentimientoInfoPage } from './consentimiento-info';

@NgModule({
  declarations: [
    ConsentimientoInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsentimientoInfoPage),
  ],
})
export class ConsentimientoInfoPageModule {}
