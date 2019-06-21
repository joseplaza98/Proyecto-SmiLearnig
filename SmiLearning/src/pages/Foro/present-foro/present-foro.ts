import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatForoPage } from '../chat-foro/chat-foro';
import { Ayuda3Page } from '../../Ayudas/ayuda3/ayuda3';

/**
 * Generated class for the PresentForoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-foro',
  templateUrl: 'present-foro.html',
})
export class PresentForoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aAyuda3(){
    this.navCtrl.push(Ayuda3Page);
  }

  chatForo(){
    this.navCtrl.push(ChatForoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentForoPage');
  }

}
