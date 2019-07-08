import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExamenInterpretacionCortePage } from '../A.1/examen-interpretacion-corte/examen-interpretacion-corte';
import { LabPatobucalPage } from '../A.2/lab-patobucal/lab-patobucal';
import { TemarioPage } from '../../../temario/temario';
import { Evalucion3T3Page } from '../../Tema 6/Evaluaciones/evalucion3-t3/evalucion3-t3';
import { Evaluacion3_2T3Page } from '../../Tema 6/Evaluaciones/evaluacion3-2-t3/evaluacion3-2-t3';

import { ChapterProgress, ProgressService } from '../../../../services/progress.service';
import { Subscription } from 'rxjs';
import { RetosAnalisisIiiPage } from '../../Tema 6/Evaluaciones/Retos/retos-analisis-iii/retos-analisis-iii';

/**
 * Generated class for the PresentTem3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-tem3',
  templateUrl: 'present-tem3.html',
})
export class PresentTem3Page {

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };
  ch5: ChapterProgress = { progress: 0, topics: [] };


  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public srv: ProgressService) {
  }

  aExamenLab(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(ExamenInterpretacionCortePage);
  }

  aLabucal(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(LabPatobucalPage);
  }

  aTemario() {
    this.navCtrl.setRoot(TemarioPage);
  }

  aRetoAnalisis3(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(RetosAnalisisIiiPage);
  }

  aEva3T3a(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(Evalucion3T3Page);
  }

  aEva3T3b(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(Evaluacion3_2T3Page);
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
    console.log('ionViewDidLoad PresentTem3Page');
  }

}
