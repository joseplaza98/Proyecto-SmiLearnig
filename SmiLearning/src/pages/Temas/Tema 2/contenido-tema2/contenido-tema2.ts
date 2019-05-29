import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LesionesBlancasPage } from '../lesiones-blancas/lesiones-blancas';

/**
 * Generated class for the ContenidoTema2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contenido-tema2',
  templateUrl: 'contenido-tema2.html',
})
export class ContenidoTema2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aLesionesBlancas() {
    this.navCtrl.push(LesionesBlancasPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContenidoTema2Page');
  }

}
