import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LibrosConsultaPage } from '../libros-consulta/libros-consulta';
import { BibligrafiaPage } from '../bibligrafia/bibligrafia';
import { SecuenciaDidacticaPage } from '../secuencia-didactica/secuencia-didactica';
import { AgendaCongresosPage } from '../agenda-congresos/agenda-congresos';
import { AboutPage } from '../../about/about'; 
/**
 * Generated class for the PresentBibliografiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-present-bibliografia',
  templateUrl: 'present-bibliografia.html',
})
export class PresentBibliografiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aLibrosConsulta(){
    this.navCtrl.push(LibrosConsultaPage)
  }

  aBibliografia(){
    this.navCtrl.push(BibligrafiaPage)
  }

  aSecuenciaDidactica(){
    this.navCtrl.push(SecuenciaDidacticaPage);
  }

  aAgenda(){
    this.navCtrl.push(AgendaCongresosPage);
  }

  aAbout(){
    this.navCtrl.push(AboutPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentBibliografiaPage');
  }

}
