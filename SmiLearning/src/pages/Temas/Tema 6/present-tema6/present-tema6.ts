import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Evalucion1T1Page } from '../Evaluaciones/evalucion1-t1/evalucion1-t1';
import { Evalucion2T2Page } from '../Evaluaciones/evalucion2-t2/evalucion2-t2';
import { Evalucion3T3Page } from '../Evaluaciones/evalucion3-t3/evalucion3-t3';
import { Evalucion4T4Page } from '../Evaluaciones/evalucion4-t4/evalucion4-t4';
import { Evalucion5T5Page } from '../Evaluaciones/evalucion5-t5/evalucion5-t5';
import { Practica1T1Page } from '../Evaluaciones/practica1-t1/practica1-t1';
import { Evaluacion3_2T3Page } from '../Evaluaciones/evaluacion3-2-t3/evaluacion3-2-t3';

/**
 * Generated class for the PresentTema6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-tema6',
  templateUrl: 'present-tema6.html',
})
export class PresentTema6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentTema6Page');
  }
  aEva1(){
    this.navCtrl.push(Evalucion1T1Page);
  }
  aEva2(){
    this.navCtrl.push(Evalucion2T2Page);
  }
  aEva3(){
    this.navCtrl.push(Evalucion3T3Page);
  }
  aEva3_2(){
    this.navCtrl.push(Evaluacion3_2T3Page);
  }
  aEva4(){
    this.navCtrl.push(Evalucion4T4Page);
  }
  aEva5(){
    this.navCtrl.push(Evalucion5T5Page);
  }
  aPractica1(){
    this.navCtrl.push(Practica1T1Page);
  }

}
