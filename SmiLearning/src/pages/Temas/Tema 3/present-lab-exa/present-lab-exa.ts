import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LabBioloPeriodontPage } from '../A.1/lab-biolo-periodont/lab-biolo-periodont';

/**
 * Generated class for the PresentLabExaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-lab-exa',
  templateUrl: 'present-lab-exa.html',
})
export class PresentLabExaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aLabBioloPeriodonto(){
    this.navCtrl.push(LabBioloPeriodontPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentLabExaPage');
  }

}
