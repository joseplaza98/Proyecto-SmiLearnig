import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PagPrincipalPage } from '../../../../pag-principal/pag-principal';

/**
 * Generated class for the Evalucion2T2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evalucion2-t2',
  templateUrl: 'evalucion2-t2.html',
})
export class Evalucion2T2Page {

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
    console.log('ionViewDidLoad Evalucion2T2Page');
  }

}
