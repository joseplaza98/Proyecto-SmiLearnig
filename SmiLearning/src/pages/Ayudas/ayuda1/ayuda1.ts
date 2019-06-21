import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the Ayuda1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ayuda1',
  templateUrl: 'ayuda1.html',
})
export class Ayuda1Page {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Ayuda1Page');
  }

}
