import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AnexoA1Cap4Page } from '../anexo-a1-cap4/anexo-a1-cap4';
import { Evalucion4T4Page } from '../../Tema 6/Evaluaciones/evalucion4-t4/evalucion4-t4';

/**
 * Generated class for the AnalisisClinCap4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-analisis-clin-cap4',
  templateUrl: 'analisis-clin-cap4.html',
})
export class AnalisisClinCap4Page {

  ocultar1: boolean = false; 
  ocultar2: boolean = false; 
  ocultartodos: boolean = false; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnalisisClinCap4Page');
  }

  aSeccionAnexo1Cap4(){
    this.navCtrl.push(AnexoA1Cap4Page);
  }

  aEva4T4(){
    this.navCtrl.push(Evalucion4T4Page);
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
    if ( this.ocultar1 && this.ocultar2 ) {
      this.ocultartodos = true;
    }
    else if ( !this.ocultar1 && !this.ocultar2) {
      this.ocultartodos = false;
    }
  }

    acciontodos() {

      if ( this.ocultartodos === false ) {
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




