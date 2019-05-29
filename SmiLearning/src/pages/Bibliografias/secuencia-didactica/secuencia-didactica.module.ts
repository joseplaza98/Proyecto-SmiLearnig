import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecuenciaDidacticaPage } from './secuencia-didactica';

@NgModule({
  declarations: [
    SecuenciaDidacticaPage,
  ],
  imports: [
    IonicPageModule.forChild(SecuenciaDidacticaPage),
  ],
})
export class SecuenciaDidacticaPageModule {}
