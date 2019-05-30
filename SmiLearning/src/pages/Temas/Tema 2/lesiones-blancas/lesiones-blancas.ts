import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PresentEnfHerPage } from '../present-enf-her/present-enf-her';
import { PresentLesReacPage } from '../present-les-reac/present-les-reac';
import { PresentLesNoEpitPage } from '../present-les-no-epit/present-les-no-epit';
import { PresentOtrasPage } from '../present-otras/present-otras';
import { Evalucion2T2Page } from '../../Tema 6/Evaluaciones/evalucion2-t2/evalucion2-t2';
import { TemarioPage } from '../../../temario/temario';

/**
 * Generated class for the LesionesBlancasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lesiones-blancas',
  templateUrl: 'lesiones-blancas.html',
})
export class LesionesBlancasPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aPresentEnfHer() {
    this.navCtrl.push(PresentEnfHerPage);
  }
  aPresentLesReac() {
    this.navCtrl.push(PresentLesReacPage);
  }
  aPresentLesNoEpit() {
    this.navCtrl.push(PresentLesNoEpitPage);
  }
  apresnetOtros() {
    this.navCtrl.push(PresentOtrasPage);
  }

  aTemario(){
    this.navCtrl.setRoot(TemarioPage);
  }

  aEva2T2(){
    this.navCtrl.push(Evalucion2T2Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LesionesBlancasPage');
  }

}
