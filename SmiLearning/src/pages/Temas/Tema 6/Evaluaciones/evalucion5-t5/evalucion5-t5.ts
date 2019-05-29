import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the Evalucion5T5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evalucion5-t5',
  templateUrl: 'evalucion5-t5.html',
})
export class Evalucion5T5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    const loader = this.loadingCtrl.create({
      content: "Espere un momento...",
      duration: 3000
    });
    loader.present();
    console.log('ionViewDidLoad Evalucion5T5Page');
  }

}
