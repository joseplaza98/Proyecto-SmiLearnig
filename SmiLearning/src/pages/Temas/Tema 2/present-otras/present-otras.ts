import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeucoplaquiaIdiopatPage } from '../Lesiones/Otros/leucoplaquia-idiopat/leucoplaquia-idiopat';
import { LeucoplaquiaPilPage } from '../Lesiones/Otros/leucoplaquia-pil/leucoplaquia-pil';
import { LengPilosaPage } from '../Lesiones/Otros/leng-pilosa/leng-pilosa';
import { LengGeogPage } from '../Lesiones/Otros/leng-geog/leng-geog';
import { LiquenPlanPage } from '../Lesiones/Otros/liquen-plan/liquen-plan';
import { EsfaceloPage } from '../Lesiones/Otros/esfacelo/esfacelo';

/**
 * Generated class for the PresentOtrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-otras',
  templateUrl: 'present-otras.html',
})
export class PresentOtrasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aLeucoIdopa() {
    this.navCtrl.push(LeucoplaquiaIdiopatPage);
  }

  aLeucoPilosa() {
    this.navCtrl.push(LeucoplaquiaPilPage);
  }

  aLenguaPil() {
    this.navCtrl.push(LengPilosaPage);
  }

  aLenguaGeo() {
    this.navCtrl.push(LengGeogPage);
  }

  aLiquenPlano() {
    this.navCtrl.push(LiquenPlanPage);
  }

  aEsfaceloRelacionado() {
    this.navCtrl.push(EsfaceloPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentOtrasPage');
  }

}
