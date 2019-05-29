import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagPrincipalPage } from './pag-principal';

@NgModule({
  declarations: [
    PagPrincipalPage,
  ],
  imports: [
    IonicPageModule.forChild(PagPrincipalPage),
  ],
})
export class PagPrincipalPageModule {}
