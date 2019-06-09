import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PresentEnfHerPage } from '../present-enf-her/present-enf-her';
import { PresentLesReacPage } from '../present-les-reac/present-les-reac';
import { PresentLesNoEpitPage } from '../present-les-no-epit/present-les-no-epit';
import { PresentOtrasPage } from '../present-otras/present-otras';
import { Evalucion2T2Page } from '../../Tema 6/Evaluaciones/evalucion2-t2/evalucion2-t2';
import { TemarioPage } from '../../../temario/temario';

import { ChapterProgress, ProgressService } from '../../../../services/progress.service';
import { Subscription } from 'rxjs';

/**
 * Generated class for the LesionesBlancasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lesiones-blancas',
  templateUrl: 'lesiones-blancas.html',
})
export class LesionesBlancasPage {

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };
  ch5: ChapterProgress = { progress: 0, topics: [] };
  

  subs: Subscription;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public srv: ProgressService) {
  }

  aPresentEnfHer(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(PresentEnfHerPage);
  }
  aPresentLesReac(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(PresentLesReacPage);
  }
  aPresentLesNoEpit(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(PresentLesNoEpitPage);
  }
  apresnetOtros(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(PresentOtrasPage);
  }

  aTemario(){
    this.navCtrl.setRoot(TemarioPage);
  }

  aEva2T2(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(Evalucion2T2Page);
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
    console.log('ionViewDidLoad LesionesBlancasPage');
  }

}
