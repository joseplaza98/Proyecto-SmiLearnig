import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PresentAnaPeriodontoPage } from '../Temas/Tema 1/present-ana-periodonto/present-ana-periodonto';
import { PresentPatoBucalPage } from '../Temas/Tema 2/present-pato-bucal/present-pato-bucal';
import { PresentTem3Page } from '../Temas/Tema 3/present-tem3/present-tem3';
import { PresentClinPaPage } from'../Temas/Tema 4/present-clin-pa/present-clin-pa';
import { PresentCasClinPage } from '../Temas/Tema 5/present-cas-clin/present-cas-clin';
import { PresentTema6Page } from '../Temas/Tema 6/present-tema6/present-tema6';

/**Imports Progress */
import { ChapterProgress, ProgressService } from '../../services/progress.service';
import { Subscription } from 'rxjs';

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
  ocultar6: boolean = false;

  ocultartodos: boolean = false; 


  /**Progress */
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

  accion6() {        
    this.ocultar6 = !this.ocultar6;
    this.checkActiveButton();
  }

  aPresentAnaPeriodonto(){
    this.navCtrl.push(PresentAnaPeriodontoPage);
  }

  aPatoBucal(){
    this.navCtrl.push(PresentPatoBucalPage);
  }

  aPresentTem3(){
    this.navCtrl.push(PresentTem3Page);
  }

  aPresentClinPa(){
    this.navCtrl.push(PresentClinPaPage);
  } 
  
  aPresentCasClin(){
    this.navCtrl.push(PresentCasClinPage);
  }

  aPresentTema6(){
    this.navCtrl.push(PresentTema6Page);
  }

  /**Ver Ocultar */
  checkActiveButton() {

    if ( this.ocultar1 && this.ocultar2 && this.ocultar3 && this.ocultar4 && this.ocultar5 && this.ocultar6 ) {
      this.ocultartodos = true;
    }
    else if ( !this.ocultar1 && !this.ocultar2 && !this.ocultar3 && !this.ocultar4 && this.ocultar5 && this.ocultar6 ) {
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
      this.ocultar6     = true;

    }
    else {
      this.ocultar1     = false;
      this.ocultar2     = false;
      this.ocultar3     = false;
      this.ocultar4     = false;
      this.ocultar5     = false;
      this.ocultar6     = false;

    }
  
    this.ocultartodos = !this.ocultartodos;
  }


/**Progress*/
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
    console.log('ionViewDidLoad TemarioPage');
  }

}
