import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

/**
 * Generated class for the AnexoA1Cap4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anexo-a1-cap4',
  templateUrl: 'anexo-a1-cap4.html',
})
export class AnexoA1Cap4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 3000
    });
    loader.present();
    console.log('ionViewDidLoad AnexoA1Cap4Page');

    const alert = this.alertCtrl.create({
      title: 'Recomendación',
      subTitle: 'Active la rotacion de pantalla en su dispositivo para poder observar el contenido de mejor modo.',
      buttons: ['OK']
    });
    alert.present();
  }

}
