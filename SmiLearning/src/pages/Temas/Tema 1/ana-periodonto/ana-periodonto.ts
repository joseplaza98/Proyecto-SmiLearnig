import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { LigaPeriodoncialPage } from '../liga-periodoncial/liga-periodoncial';
import { CasosT1_1Page } from '../Casos de Estudio/casos-t1-1/casos-t1-1';
import { CasosT1_2Page } from '../Casos de Estudio/casos-t1-2/casos-t1-2';
import { CasosT1_3Page } from '../Casos de Estudio/casos-t1-3/casos-t1-3';
import { Subt1MacroPage } from '../subt1-macro/subt1-macro';
import { TipCementPage } from '../tip-cement/tip-cement';

import { ChapterProgress, ProgressService } from '../../../../services/progress.service';
import { Subscription } from 'rxjs';
import { Evalucion1T1Page } from '../../Tema 6/Evaluaciones/evalucion1-t1/evalucion1-t1';
import { Practica1T1Page } from '../../Tema 6/Evaluaciones/practica1-t1/practica1-t1';

/**
 * Generated class for the AnaPeriodontoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ana-periodonto',
  templateUrl: 'ana-periodonto.html',
})
export class AnaPeriodontoPage {

  intro: string = "defin";
  isAndroid: boolean = false;

  ocultar1: boolean = false;
  ocultar2: boolean = false;
  ocultar3: boolean = false;
  ocultar4: boolean = false;
  ocultar5: boolean = false;
  ocultar6: boolean = false;
  ocultar7: boolean = false;
  ocultar8: boolean = false;
  ocultar9: boolean = false;
  ocultartodos: boolean = false;

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };
  ch5: ChapterProgress = { progress: 0, topics: [] };
  ch6: ChapterProgress = { progress: 0, topics: [] };

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public srv: ProgressService) {

    this.isAndroid = platform.is('android');

  }

  aSubt1Macro(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(Subt1MacroPage);
  }

  aTipCement(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(TipCementPage);
  }

  aLiagPeriodoncial(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(LigaPeriodoncialPage);
  }

  aCaso1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(CasosT1_1Page);
  }

  aCaso2(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(CasosT1_2Page);
  }

  aCaso3(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(CasosT1_3Page);
  }

  aEva1T1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(Evalucion1T1Page);
  }

  aPracti1T1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(Practica1T1Page);
  }

  accion1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.ocultar1 = !this.ocultar1;
    this.checkActiveButton();
  }

  accion2(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.ocultar2 = !this.ocultar2;
    this.checkActiveButton();
  }

  accion3(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.ocultar3 = !this.ocultar3;
    this.checkActiveButton();
  }

  progress(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
  }

  accion4() {
    this.ocultar4 = !this.ocultar4;
    this.checkActiveButton();
  }

  accion5(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.ocultar5 = !this.ocultar5;
    this.checkActiveButton();
  }

  accion6(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.ocultar6 = !this.ocultar6;
    this.checkActiveButton();
  }

  accion7(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.ocultar7 = !this.ocultar7;
    this.checkActiveButton();
  }

  accion8(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.ocultar8 = !this.ocultar8;
    this.checkActiveButton();
  }

  accion9(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.ocultar9 = !this.ocultar9;
    this.checkActiveButton();
  }


  checkActiveButton() {

    if (this.ocultar1 && this.ocultar2 && this.ocultar3 && this.ocultar4 && this.ocultar5 && this.ocultar6 && this.ocultar7 && this.ocultar8 && this.ocultar9) {
      this.ocultartodos = true;
    }
    else if (!this.ocultar1 && !this.ocultar2 && !this.ocultar3 && !this.ocultar4 && this.ocultar5 && this.ocultar6 && this.ocultar7 && this.ocultar8 && this.ocultar9) {
      this.ocultartodos = false;
    }
  }

  acciontodos() {

    if (this.ocultartodos === false) {
      this.ocultar1 = true;
      this.ocultar2 = true;
      this.ocultar3 = true;
      this.ocultar4 = true;
      this.ocultar5 = true;
      this.ocultar6 = true;
      this.ocultar7 = true;
      this.ocultar8 = true;
      this.ocultar9 = true;
    }
    else {
      this.ocultar1 = false;
      this.ocultar2 = false;
      this.ocultar3 = false;
      this.ocultar4 = false;
      this.ocultar5 = false;
      this.ocultar6 = false;
      this.ocultar7 = false;
      this.ocultar8 = false;
      this.ocultar9 = false;
    }

    this.ocultartodos = !this.ocultartodos;
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnaPeriodontoPage');
  }

}
