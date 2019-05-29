import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeccionCasClinPage } from './seccion-cas-clin';

@NgModule({
  declarations: [
    SeccionCasClinPage,
  ],
  imports: [
    IonicPageModule.forChild(SeccionCasClinPage),
  ],
})
export class SeccionCasClinPageModule {}
