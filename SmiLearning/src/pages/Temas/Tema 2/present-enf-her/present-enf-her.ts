import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeucodemaPage } from '../Lesiones/Enfermedades hereditarias/leucodema/leucodema';
import { NevuEsponBlandPage } from '../Lesiones/Enfermedades hereditarias/nevu-espon-bland/nevu-espon-bland';
import { DisqueratosisPage } from '../Lesiones/Enfermedades hereditarias/disqueratosis/disqueratosis';
import { QueratosisPage } from '../Lesiones/Enfermedades hereditarias/queratosis/queratosis';

/**
 * Generated class for the PresentEnfHerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-enf-her',
  templateUrl: 'present-enf-her.html',
})
export class PresentEnfHerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aLeucodema() {
    this.navCtrl.push(LeucodemaPage);
  }

  aNEvuEsponjoso() {
    this.navCtrl.push(NevuEsponBlandPage);
  }

  aDisqueratosis() {
    this.navCtrl.push(DisqueratosisPage);
  }

  aQueratosis() {
    this.navCtrl.push(QueratosisPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentEnfHerPage');
  }

}
