import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatForoPage } from '../chat-foro/chat-foro';

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

  chatForo(){
    this.navCtrl.push(ChatForoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentForoPage');
  }

}
