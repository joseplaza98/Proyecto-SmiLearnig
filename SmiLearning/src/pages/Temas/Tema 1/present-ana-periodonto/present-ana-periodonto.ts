import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnaPeriodontoPage } from '../ana-periodonto/ana-periodonto';

/**
 * Generated class for the PresentAnaPeriodontoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-ana-periodonto',
  templateUrl: 'present-ana-periodonto.html',
})
export class PresentAnaPeriodontoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aAnaPeriodonto(){
    this.navCtrl.push(AnaPeriodontoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentAnaPeriodontoPage');
  }

}
