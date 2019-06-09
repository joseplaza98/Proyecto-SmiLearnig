import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PagPrincipalPage } from '../../../../pag-principal/pag-principal';

/**
 * Generated class for the Evaluacion3_2T3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluacion3-2-t3',
  templateUrl: 'evaluacion3-2-t3.html',
})
export class Evaluacion3_2T3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  aPagPrinc(){
    this.navCtrl.setRoot(PagPrincipalPage);
  }
  
  ionViewDidLoad() {
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 3000
    });
    loader.present();
    console.log('ionViewDidLoad Evaluacion3_2T3Page');
  }

}
