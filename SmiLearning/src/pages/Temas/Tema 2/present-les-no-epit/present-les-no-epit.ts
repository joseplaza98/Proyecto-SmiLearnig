import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandidiasisPage } from '../Lesiones/Lesiones no epiteliales/candidiasis/candidiasis';
import { QuemaMucosaPage } from '../Lesiones/Lesiones no epiteliales/quema-mucosa/quema-mucosa';
import { FibroSubmucoPage } from '../Lesiones/Lesiones no epiteliales/fibro-submuco/fibro-submuco';
import { GranulosFordycePage } from '../Lesiones/Lesiones no epiteliales/granulos-fordyce/granulos-fordyce';
import { TejLinfoideEctopicoPage } from '../Lesiones/Lesiones no epiteliales/tej-linfoide-ectopico/tej-linfoide-ectopico';
import { QuistGingivalPage } from '../Lesiones/Lesiones no epiteliales/quist-gingival/quist-gingival';
import { ParulisPage } from '../Lesiones/Lesiones no epiteliales/parulis/parulis';
import { LipomaPage } from '../Lesiones/Lesiones no epiteliales/lipoma/lipoma';

import { ChapterProgress, ProgressService } from '../../../../services/progress.service';
import { Subscription } from 'rxjs';

/**
 * Generated class for the PresentLesNoEpitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-les-no-epit',
  templateUrl: 'present-les-no-epit.html',
})
export class PresentLesNoEpitPage {

  total = 0;
  ch1: ChapterProgress = { progress: 0, topics: [] };
  ch2: ChapterProgress = { progress: 0, topics: [] };
  ch3: ChapterProgress = { progress: 0, topics: [] };
  ch4: ChapterProgress = { progress: 0, topics: [] };
  ch5: ChapterProgress = { progress: 0, topics: [] };
  

  subs: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public srv: ProgressService) {
  }

  aCandidiasis(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(CandidiasisPage);
  }

  aQuemaduras(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(QuemaMucosaPage);
  }

  aFibrosos(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(FibroSubmucoPage);
  }

  aGranulos(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(GranulosFordycePage);
  }

  aTejidoLinfoide(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(TejLinfoideEctopicoPage);
  }

  aQuistes(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(QuistGingivalPage);
  }

  aParulis(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(ParulisPage);
  }

  aLipoma(chapter: number, topic: number) {
    this.srv.updateProgress(chapter, topic);
    this.navCtrl.push(LipomaPage);
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
    console.log('ionViewDidLoad PresentLesNoEpitPage');
  }

}
