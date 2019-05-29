import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProgressService } from '../../../../../services/progress.service';

/**
 * Generated class for the ExamenInterpretacionCortePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examen-interpretacion-corte',
  templateUrl: 'examen-interpretacion-corte.html',
})
export class ExamenInterpretacionCortePage {

  ocultar1: boolean = false;
  ocultar2: boolean = false;
  ocultartodos: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public srv: ProgressService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamenInterpretacionCortePage');
  }
  accion1() {        
    this.ocultar1 = !this.ocultar1;
    this.checkActiveButton();
  }
  
  accion2() {        
    this.ocultar2 = !this.ocultar2;
    this.checkActiveButton();
  }
  
  checkActiveButton() {

    if (this.ocultar1 && this.ocultar2) {
      this.ocultartodos = true;
    }
    else if (!this.ocultar1 && !this.ocultar2) {
      this.ocultartodos = false;
    }
  }

  acciontodos() {

    if (this.ocultartodos === false) {
      this.ocultar1 = true;
      this.ocultar2 = true;

    }
    else {
      this.ocultar1 = false;
      this.ocultar2 = false;
    }

    this.ocultartodos = !this.ocultartodos;
  }

}
