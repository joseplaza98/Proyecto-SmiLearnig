import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeucoplaquiaIdiopatPage } from '../Lesiones/Otros/leucoplaquia-idiopat/leucoplaquia-idiopat';
import { LeucoplaquiaPilPage } from '../Lesiones/Otros/leucoplaquia-pil/leucoplaquia-pil';
import { LengPilosaPage } from '../Lesiones/Otros/leng-pilosa/leng-pilosa';
import { LengGeogPage } from '../Lesiones/Otros/leng-geog/leng-geog';
import { LiquenPlanPage } from '../Lesiones/Otros/liquen-plan/liquen-plan';
import { EsfaceloPage } from '../Lesiones/Otros/esfacelo/esfacelo';

import { ChapterProgress, ProgressService } from '../../../../services/progress.service';
import { Subscription } from 'rxjs';

/**
 * Generated class for the PresentOtrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-otras',
  templateUrl: 'present-otras.html',
})
export class PresentOtrasPage {

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };
  ch5: ChapterProgress = { progress: 0, topics: [] };
  

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public srv: ProgressService) {
  }

  aLeucoIdopa(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(LeucoplaquiaIdiopatPage);
  }

  aLeucoPilosa(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(LeucoplaquiaPilPage);
  }

  aLenguaPil(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(LengPilosaPage);
  }

  aLenguaGeo(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(LengGeogPage);
  }

  aLiquenPlano(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(LiquenPlanPage);
  }

  aEsfaceloRelacionado(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(EsfaceloPage);
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
    console.log('ionViewDidLoad PresentOtrasPage');
  }

}
