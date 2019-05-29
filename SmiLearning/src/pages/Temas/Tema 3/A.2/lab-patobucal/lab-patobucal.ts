import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PatobucPage } from '../patobuc/patobuc';

/**
 * Generated class for the LabPatobucalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab-patobucal',
  templateUrl: 'lab-patobucal.html',
})
export class LabPatobucalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aPatobuc(){
    this.navCtrl.push(PatobucPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LabPatobucalPage');
  }

}
