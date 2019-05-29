import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExamenInterpretacionCortePage } from '../examen-interpretacion-corte/examen-interpretacion-corte';

/**
 * Generated class for the LabBioloPeriodontPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab-biolo-periodont',
  templateUrl: 'lab-biolo-periodont.html',
})
export class LabBioloPeriodontPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aExamenInterpretacion(){
    this.navCtrl.push(ExamenInterpretacionCortePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LabBioloPeriodontPage');
  }

}
