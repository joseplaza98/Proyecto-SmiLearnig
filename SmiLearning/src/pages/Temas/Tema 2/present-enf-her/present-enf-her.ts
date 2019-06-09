import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeucodemaPage } from '../Lesiones/Enfermedades hereditarias/leucodema/leucodema';
import { NevuEsponBlandPage } from '../Lesiones/Enfermedades hereditarias/nevu-espon-bland/nevu-espon-bland';
import { DisqueratosisPage } from '../Lesiones/Enfermedades hereditarias/disqueratosis/disqueratosis';
import { QueratosisPage } from '../Lesiones/Enfermedades hereditarias/queratosis/queratosis';

import { ChapterProgress, ProgressService } from '../../../../services/progress.service';
import { Subscription } from 'rxjs';

/**
 * Generated class for the PresentEnfHerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-enf-her',
  templateUrl: 'present-enf-her.html',
})
export class PresentEnfHerPage {

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };
  ch5: ChapterProgress = { progress: 0, topics: [] };
  

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public srv: ProgressService) {
  }

  aLeucodema(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(LeucodemaPage);
  }

  aNEvuEsponjoso(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(NevuEsponBlandPage);
  }

  aDisqueratosis(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(DisqueratosisPage);
  }

  aQueratosis(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(QueratosisPage);
  }

  ionViewWillEnter() {
    this.subs = this.srv.progress()
      .subscribe(x => {
        this.total = x.total;
        this.ch1 = x.ch1;
        this.ch2 = x.ch2;
        this.ch3 = x.ch3;
        this.ch4 = x.ch4;
        this.ch5 = x.ch5;
      });
  }

  ionViewWillLeave() {
    this.subs.unsubscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentEnfHerPage');
  }

}
