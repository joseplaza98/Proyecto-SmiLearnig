import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeucoplaquiaIdiopatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leucoplaquia-idiopat',
  templateUrl: 'leucoplaquia-idiopat.html',
})
export class LeucoplaquiaIdiopatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeucoplaquiaIdiopatPage');
  }

}
