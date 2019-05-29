import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaCongresosPage } from './agenda-congresos';

@NgModule({
  declarations: [
    AgendaCongresosPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaCongresosPage),
  ],
})
export class AgendaCongresosPageModule {}
