import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConsentimientoInfoPage } from '../Derechos Uso/consentimiento-info/consentimiento-info';
import { TerminCondPage } from '../Derechos Uso/termin-cond/termin-cond';
import { DerAutoPage } from '../Derechos Uso/der-auto/der-auto';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  aConsentimientoInfo() {
    this.navCtrl.push(ConsentimientoInfoPage)
  }

  aTerminCond() {
    this.navCtrl.push(TerminCondPage)
  }

  aDerAuto() {
    this.navCtrl.push(DerAutoPage)
  }


}
