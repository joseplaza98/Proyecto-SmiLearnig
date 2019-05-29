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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aCandidiasis() {
    this.navCtrl.push(CandidiasisPage);
  }

  aQuemaduras() {
    this.navCtrl.push(QuemaMucosaPage);
  }

  aFibrosos() {
    this.navCtrl.push(FibroSubmucoPage);
  }

  aGranulos() {
    this.navCtrl.push(GranulosFordycePage);
  }

  aTejidoLinfoide() {
    this.navCtrl.push(TejLinfoideEctopicoPage);
  }

  aQuistes() {
    this.navCtrl.push(QuistGingivalPage);
  }

  aParulis() {
    this.navCtrl.push(ParulisPage);
  }

  aLipoma() {
    this.navCtrl.push(LipomaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentLesNoEpitPage');
  }

}
