import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeccionCasClinPage } from '../seccion-cas-clin/seccion-cas-clin';
import { CasClinA1Page } from '../cas-clin-a1/cas-clin-a1';

/**
 * Generated class for the PresentCasClinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-cas-clin',
  templateUrl: 'present-cas-clin.html',
})
export class PresentCasClinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aSeccionCasClin(){
    this.navCtrl.push(SeccionCasClinPage);
  }

  aCasClinA1(){
    this.navCtrl.push(CasClinA1Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentCasClinPage');
  }

}
