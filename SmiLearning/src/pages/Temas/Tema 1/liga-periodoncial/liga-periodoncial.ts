import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ChapterProgress, ProgressService } from '../../../../services/progress.service';
import { Subscription } from 'rxjs';

/**
 * Generated class for the LigaPeriodoncialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liga-periodoncial',
  templateUrl: 'liga-periodoncial.html',
})
export class LigaPeriodoncialPage {

  ocultar1: boolean = false;
  ocultar2: boolean = false;
  ocultar3: boolean = false;

  ocultartodos: boolean = false;

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };
  ch5: ChapterProgress = { progress: 0, topics: [] };
  ch6: ChapterProgress = { progress: 0, topics: [] };

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public srv: ProgressService) {
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

  checkActiveButton() {

    if ( this.ocultar1 && this.ocultar2 && this.ocultar3) {
      this.ocultartodos = true;
    }
    else if ( !this.ocultar1 && !this.ocultar2 && !this.ocultar3){
      this.ocultartodos = false;
    }
  }

  acciontodos() {

    if ( this.ocultartodos === false ) {
      this.ocultar1     = true;
      this.ocultar2     = true;
      this.ocultar3     = true;
    }
    else {
      this.ocultar1     = false;
      this.ocultar2     = false;
      this.ocultar3     = false;
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
    console.log('ionViewDidLoad LigaPeriodoncialPage');
  }

}
