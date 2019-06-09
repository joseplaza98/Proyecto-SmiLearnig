import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChapterProgress, ProgressService } from '../../../../../services/progress.service';
import { Subscription } from 'rxjs';

/**
 * Generated class for the ExamenInterpretacionCortePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examen-interpretacion-corte',
  templateUrl: 'examen-interpretacion-corte.html',
})
export class ExamenInterpretacionCortePage {

  ocultar1: boolean = false;
  ocultar2: boolean = false;
  ocultartodos: boolean = false;

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };
  ch5: ChapterProgress = { progress: 0, topics: [] };
  

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public srv: ProgressService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamenInterpretacionCortePage');
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
  
  checkActiveButton() {

    if (this.ocultar1 && this.ocultar2) {
      this.ocultartodos = true;
    }
    else if (!this.ocultar1 && !this.ocultar2) {
      this.ocultartodos = false;
    }
  }

  acciontodos() {

    if (this.ocultartodos === false) {
      this.ocultar1 = true;
      this.ocultar2 = true;

    }
    else {
      this.ocultar1 = false;
      this.ocultar2 = false;
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
      });
  }

  ionViewWillLeave() {
    this.subs.unsubscribe();
  }

}
