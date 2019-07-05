import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PagPrincipalPage } from '../../../../../pag-principal/pag-principal';

/**
 * Generated class for the RetosAnalisisIiiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-retos-analisis-iii',
  templateUrl: 'retos-analisis-iii.html',
})
export class RetosAnalisisIiiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  aPagPrinc(){
    this.navCtrl.setRoot(PagPrincipalPage);
  }

  ionViewDidLoad() {
    const loader = this.loadingCtrl.create({
      content: "Espere por favor...",
      duration: 3000
    });
    loader.present();
    console.log('ionViewDidLoad RetosAnalisisIiiPage');
  }

}
