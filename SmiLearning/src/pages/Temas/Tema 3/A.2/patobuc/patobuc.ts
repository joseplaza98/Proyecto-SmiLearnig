import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnexoLabc3Page } from '../anexo-labc3/anexo-labc3';

/**
 * Generated class for the PatobucPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patobuc',
  templateUrl: 'patobuc.html',
})
export class PatobucPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aAnexoLab(){
    this.navCtrl.push(AnexoLabc3Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatobucPage');
  }

}
