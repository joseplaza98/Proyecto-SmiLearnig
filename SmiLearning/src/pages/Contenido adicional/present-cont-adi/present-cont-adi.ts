import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PresentacionesPage } from '../presentaciones/presentaciones';
import { VideosPage } from '../videos/videos';

/**
 * Generated class for the PresentContAdiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-cont-adi',
  templateUrl: 'present-cont-adi.html',
})
export class PresentContAdiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aPresentaciones() {
    this.navCtrl.push(PresentacionesPage);
  }

  aVideos() {
    this.navCtrl.push(VideosPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentContAdiPage');
  }

}
