import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChapterProgress, ProgressService } from '../../../../services/progress.service';
import { Subscription } from 'rxjs';

/**
 * Generated class for the Subt1MacroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subt1-macro',
  templateUrl: 'subt1-macro.html',
})
export class Subt1MacroPage {

  ocultar1: boolean = false;

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

  accion1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.ocultar1 = !this.ocultar1;
    this.checkActiveButton();
  }

  aActividad1(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);

  }


  checkActiveButton() {

    if (this.ocultar1) {
      this.ocultartodos = true;
    }
    else if (!this.ocultar1) {
      this.ocultartodos = false;
    }
  }

  acciontodos() {

    if (this.ocultartodos === false) {
      this.ocultar1 = true;
    }
    else {
      this.ocultar1 = false;
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad Subt1MacroPage');
  }

}
