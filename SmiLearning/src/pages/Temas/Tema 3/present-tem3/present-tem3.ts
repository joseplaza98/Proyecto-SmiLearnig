import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExamenInterpretacionCortePage } from '../A.1/examen-interpretacion-corte/examen-interpretacion-corte';
import { LabPatobucalPage } from '../A.2/lab-patobucal/lab-patobucal';
import { TemarioPage } from '../../../temario/temario';
import { Evalucion3T3Page } from '../../Tema 6/Evaluaciones/evalucion3-t3/evalucion3-t3';
import { Evaluacion3_2T3Page } from '../../Tema 6/Evaluaciones/evaluacion3-2-t3/evaluacion3-2-t3';

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

  aTemario(){
    this.navCtrl.setRoot(TemarioPage);
  }

  aEva3T3a(){
    this.navCtrl.push(Evalucion3T3Page);
  }

  aEva3T3b(){
    this.navCtrl.push(Evaluacion3_2T3Page);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentTem3Page');
  }

}
