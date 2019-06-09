import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnalisisClinCap4Page } from '../analisis-clin-cap4/analisis-clin-cap4';

import { ChapterProgress, ProgressService } from '../../../../services/progress.service';
import { Subscription } from 'rxjs';

/**
 * Generated class for the PresentClinPaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-clin-pa',
  templateUrl: 'present-clin-pa.html',
})
export class PresentClinPaPage {

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };
  ch5: ChapterProgress = { progress: 0, topics: [] };
  

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public srv: ProgressService) {
  }

  aAnalisisClinCap4(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(AnalisisClinCap4Page);
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
    console.log('ionViewDidLoad PresentClinPaPage');
  }

}
