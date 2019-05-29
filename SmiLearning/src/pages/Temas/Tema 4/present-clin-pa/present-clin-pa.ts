import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnalisisClinCap4Page } from '../analisis-clin-cap4/analisis-clin-cap4';

/**
 * Generated class for the PresentClinPaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-clin-pa',
  templateUrl: 'present-clin-pa.html',
})
export class PresentClinPaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aAnalisisClinCap4(){
    this.navCtrl.push(AnalisisClinCap4Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentClinPaPage');
  }

}
