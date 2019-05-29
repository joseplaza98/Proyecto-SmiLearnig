import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ProgressService, ChapterProgress } from '../../../../../services/progress.service';
import { Subscription } from 'rxjs';
/**
 * Generated class for the CasosT1_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-casos-t1-1',
  templateUrl: 'casos-t1-1.html',
})
export class CasosT1_1Page {

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };
  ch5: ChapterProgress = { progress: 0, topics: [] };
  ch6: ChapterProgress = { progress: 0, topics: [] };

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public srv: ProgressService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CasosT1_1Page');
  }

  aNota(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    const alert = this.alertCtrl.create({
      title: 'NOTA',
      subTitle: 'Debe observarse que en este corte falta los núcleos de las capas celulares externas.Este epitelio se denomina ortoqueratinizado, pero a menudo las células del stratum neum del epitelio de la mucosa masticatoria humana contiene restos de los núcleos (fechas).',
      buttons: ['OK']
    });
    alert.present();
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
        this.ch6 = x.ch6;
      });
  }



  ionViewWillLeave() {
    this.subs.unsubscribe();
  }

}
