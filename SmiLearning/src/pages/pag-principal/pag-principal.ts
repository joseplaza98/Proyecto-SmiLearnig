import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController, App } from 'ionic-angular';
import { BusquedaPage } from '../busqueda/busqueda';
import { TemarioPage } from '../temario/temario';
import { ChatForoPage } from '../chat-foro/chat-foro';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';
import { ProgressService } from '../../services/progress.service';
import { PresentCasClinPage } from '../Temas/Tema 5/present-cas-clin/present-cas-clin';
import { PresentBibliografiaPage } from '../Bibliografias/present-bibliografia/present-bibliografia';
import { LoginPage } from '../Sesion/login/login';

/**
 * Generated class for the PagPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pag-principal',
  templateUrl: 'pag-principal.html',
})
export class PagPrincipalPage {



  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController, public authService: AuthService, public alertController: AlertController, public app: App, public srv: ProgressService) {
  }

  aBusqueda() {
    this.navCtrl.push(BusquedaPage);
  }

  aTemario() {
    this.navCtrl.push(TemarioPage);
  }

  aForo(){
    this.navCtrl.push(ChatForoPage);
  }

  aPresentBibliografia(){
    this.navCtrl.push(PresentBibliografiaPage);
  }

  aPresentCasClin(){
    this.navCtrl.push(PresentCasClinPage);
  }

  singOut() {

    const confirm = this.alertController.create({
      title: 'Confirmación',
      message: '¿Esta seguro que quiere cerrar la sesión?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.afAuth.auth.signOut();
            /** Este deja pasar entre paginas pero deja las taps al volver a la pagina login*/
            this.navCtrl.setRoot(LoginPage);

            /**Este quita las taps y regresa a la pagina inicio pero genera un error al ingresar de nuevo */
            /**this.app.getRootNav().setRoot(LoginPage);*/
            console.log('Aceptar activado');
          }
        },
        {
          text: 'Cancelar',
          handler: () => {

            console.log('Cancelar activado');
          }
        }
      ]
    });
    confirm.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PagPrincipalPage');
  }

}
