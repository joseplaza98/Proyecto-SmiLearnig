import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PresentAnaPeriodontoPage } from '../Temas/Tema 1/present-ana-periodonto/present-ana-periodonto';
import { PresentPatoBucalPage } from '../Temas/Tema 2/present-pato-bucal/present-pato-bucal';
import { PresentTem3Page } from '../Temas/Tema 3/present-tem3/present-tem3';
import { PresentClinPaPage } from'../Temas/Tema 4/present-clin-pa/present-clin-pa';
import { PresentCasClinPage } from '../Temas/Tema 5/present-cas-clin/present-cas-clin';

import { ChapterProgress, ProgressService } from '../../services/progress.service';
import { Subscription } from 'rxjs';

import { PagPrincipalPage } from '../pag-principal/pag-principal';
import { Ayuda1Page } from '../Ayudas/ayuda1/ayuda1';

/**
 * Generated class for the TemarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-temario',
  templateUrl: 'temario.html',
})
export class TemarioPage {

  /**Vista y ocultamiento */
  ocultar1: boolean = false;
  ocultar2: boolean = false;
  ocultar3: boolean = false;
  ocultar4: boolean = false;
  ocultar5: boolean = false;

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

  aAyuda1(){
    this.navCtrl.push(Ayuda1Page);
  }

  accion1() {        
    this.ocultar1 = !this.ocultar1;
    this.checkActiveButton();
  }
  
  accion2() {        
    this.ocultar2 = !this.ocultar2;
    this.checkActiveButton();
  }
  
  accion3() {        
    this.ocultar3 = !this.ocultar3;
    this.checkActiveButton();
  }
  
  accion4() {        
    this.ocultar4 = !this.ocultar4;
    this.checkActiveButton();
  }

  accion5() {        
    this.ocultar5 = !this.ocultar5;
    this.checkActiveButton();
  }

  aPresentAnaPeriodonto(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(PresentAnaPeriodontoPage);
  }

  aPatoBucal(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(PresentPatoBucalPage);
  }

  aPresentTem3(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(PresentTem3Page);
  }

  aPresentClinPa(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(PresentClinPaPage);
  } 
  
  aPresentCasClin(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(PresentCasClinPage);
  }

  aPagPrinc(){
    this.navCtrl.setRoot(PagPrincipalPage);
  }

  /**Ver Ocultar */
  checkActiveButton() {

    if ( this.ocultar1 && this.ocultar2 && this.ocultar3 && this.ocultar4 && this.ocultar5) {
      this.ocultartodos = true;
    }
    else if ( !this.ocultar1 && !this.ocultar2 && !this.ocultar3 && !this.ocultar4 && this.ocultar5) {
      this.ocultartodos = false;
    }
  }

  
  acciontodos() {

    if ( this.ocultartodos === false ) {
      this.ocultar1     = true;
      this.ocultar2     = true;
      this.ocultar3     = true;
      this.ocultar4     = true;
      this.ocultar5     = true;

    }
    else {
      this.ocultar1     = false;
      this.ocultar2     = false;
      this.ocultar3     = false;
      this.ocultar4     = false;
      this.ocultar5     = false;

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
    console.log('ionViewDidLoad TemarioPage');
  }

}
