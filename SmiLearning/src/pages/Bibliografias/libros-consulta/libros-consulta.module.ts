import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibrosConsultaPage } from './libros-consulta';

@NgModule({
  declarations: [
    LibrosConsultaPage,
  ],
  imports: [
    IonicPageModule.forChild(LibrosConsultaPage),
  ],
})
export class LibrosConsultaPageModule {}
