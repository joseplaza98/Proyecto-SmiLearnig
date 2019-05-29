import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContenidoTema2Page } from '../contenido-tema2/contenido-tema2';

/**
 * Generated class for the PresentPatoBucalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-pato-bucal',
  templateUrl: 'present-pato-bucal.html',
})
export class PresentPatoBucalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aContenidoTema() {
    this.navCtrl.push(ContenidoTema2Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentPatoBucalPage');
  }

}
