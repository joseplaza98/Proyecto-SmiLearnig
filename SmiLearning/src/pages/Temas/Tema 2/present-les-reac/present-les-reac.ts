import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HiperqueratosisPage } from '../Lesiones/Lesiones reactivas/hiperqueratosis/hiperqueratosis';
import { LbRelaTabacoPage } from '../Lesiones/Lesiones reactivas/lb-rela-tabaco/lb-rela-tabaco';
import { EstomatitisPage } from '../Lesiones/Lesiones reactivas/estomatitis/estomatitis';
import { QueilitisPage } from '../Lesiones/Lesiones reactivas/queilitis/queilitis';

/**
 * Generated class for the PresentLesReacPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-les-reac',
  templateUrl: 'present-les-reac.html',
})
export class PresentLesReacPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aHiperquerosis() {
    this.navCtrl.push(HiperqueratosisPage);
  }

  aLesionesTabaco() {
    this.navCtrl.push(LbRelaTabacoPage);
  }

  aEstomatitis() {
    this.navCtrl.push(EstomatitisPage);
  }

  aQueilitis() {
    this.navCtrl.push(QueilitisPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentLesReacPage');
  }

}
