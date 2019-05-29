import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LibrosConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-libros-consulta',
  templateUrl: 'libros-consulta.html',
})
export class LibrosConsultaPage {

  Libros1 = [];
  Libros2 = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.Libros1 = [
      {
        'img': '../../../assets/imgs/Libros/Parte 1/libro1-a.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 1/libro2-a.jpg'      
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 1/libro3-a.jpg'      
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 1/libro4-a.jpg'      
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 1/libro5-a.jpg'      
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 1/libro6-a.jpg'      
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 1/libro7-a.jpg'      
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 1/libro8-a.jpg'      
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 1/libro9-a.jpg'      
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 1/libro10-a.jpg'      
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 1/libro11-a.jpg'      
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 1/libro12-a.jpg'      
      },

    ]

    this.Libros2 = [
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro1-b.png'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro2-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro3-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro4-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro5-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro6-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro7-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro8-b.png'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro9-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro10-b.png'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro11-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro12-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro13-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro14-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro15-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro16-b.png'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro17-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro18-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro19-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro20-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro21-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro22-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro23-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro24-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro25-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro26-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro27-b.jpg'
      },
      {
        'img': '../../../assets/imgs/Libros/Parte 2/libro28-b.jpg'
      },
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibrosConsultaPage');
  }

}
