import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController, App } from 'ionic-angular';
import { BusquedaPage } from '../busqueda/busqueda';
import { TemarioPage } from '../temario/temario';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.service';
import { ProgressService } from '../../services/progress.service';
import { PresentCasClinPage } from '../Temas/Tema 5/present-cas-clin/present-cas-clin';
import { PresentBibliografiaPage } from '../Bibliografias/present-bibliografia/present-bibliografia';
import { LoginPage } from '../Sesion/login/login';
import { PresentContAdiPage } from '../Contenido adicional/present-cont-adi/present-cont-adi';
import { PresentForoPage } from '../Foro/present-foro/present-foro';
import { ToastController } from 'ionic-angular';
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



  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController, public authService: AuthService, public alertController: AlertController, public app: App, public srv: ProgressService, public toastCtrl: ToastController) {
  }

  aTemario() {
    this.navCtrl.push(TemarioPage);
  }

  aBusqueda() {
    this.navCtrl.push(BusquedaPage);
  }

  aPresentCasClin() {
    this.navCtrl.push(PresentCasClinPage);
  }

  aPresentContAdi() {
    this.navCtrl.push(PresentContAdiPage);
  }

  aPresentForo() {
    this.navCtrl.push(PresentForoPage);
  }

  aPresentBibliografia() {
    this.navCtrl.push(PresentBibliografiaPage);
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
      let toast = this.toastCtrl.create({
        message: 'SmiLearnig le da la bienvenida al curso básico en Periodontología Bucal.',
        duration: 4000,
      });
      toast.present();
    console.log('ionViewDidLoad PagPrincipalPage');
  }

}
