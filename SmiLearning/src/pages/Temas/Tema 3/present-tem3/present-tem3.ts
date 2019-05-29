import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExamenInterpretacionCortePage } from '../A.1/examen-interpretacion-corte/examen-interpretacion-corte';
import { LabPatobucalPage } from '../A.2/lab-patobucal/lab-patobucal';

/**
 * Generated class for the PresentTem3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-tem3',
  templateUrl: 'present-tem3.html',
})
export class PresentTem3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aExamenLab() {
    this.navCtrl.push(ExamenInterpretacionCortePage);
  }

  aLabucal() {
    this.navCtrl.push(LabPatobucalPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentTem3Page');
  }

}
