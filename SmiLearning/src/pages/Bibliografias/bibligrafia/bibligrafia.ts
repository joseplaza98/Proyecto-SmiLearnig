import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the BibligrafiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bibligrafia',
  templateUrl: 'bibligrafia.html',
})
export class BibligrafiaPage {

  intro: string = "c1";
  isAndroid: boolean = false;

  bibliografia1 = [];
  presentC1 = [];

  bibliografia2 = [];
  presentC2 = [];

  bibliografia3 = [];
  presentC3 = [];

  bibliografia4 = [];
  presentC4 = [];

  bibliografia5 = [];
  presentC5 = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    this.isAndroid = platform.is('android');

    this.presentC1 = [
      {
        'tt': 'Capítulo 1',
        'present': 'En este sitio encontrará las referencias correspondientes al capitulo 1 de SmiLearning.'
      }
    ]
    this.bibliografia1 = [
      {
        'ref': '-Ainamo, J, Talarin, A. (1976) The increase with age of the width of attachment gingiva. Journal of Periodontal Research 11: 182-188.'
      },

      {
        'ref': '-Egelberg, J. (1986). The blood vessels of the dento-gingival junction. Journal of Periodontal Research 1: 163-179.'
      },

      {
        'ref': '-Karring, T. (1973). Mitotic activity in the oral epithelium. Journal of Periodontal Research, Suppl 13: 1-47.'
      },

      {
        'ref': '-Listgarten, M.A (1966). Electron microscopic study of the gingiva-dental junction of man. American Journal of Anatomy 119: 147-178.'
      },

      {
        'ref': '-Listgarten, M. A (1972). Normal development, structure, physiology and repair of gingival epithelium. Oral Science Review 1: 3-67.'
      },

      {
        'ref': '-Page, R.C., Ammons, W.F., Schectman, L.R y Dillingham, L.A. (1974). Collagen fiber bundles of the normal marginal gingiva in the marmoset. Archives of Oral Biology 19: 1039-1043.'
      },

      {
        'ref': '-Palmer, R.M. y Lubbock, M.J. (1995). The soft connective tissue of the gingiva and periodontal ligament: are the unique? Oral Diseases 1: 230-237.'
      },

      {
        'ref': '-Schroeder, H.E. (1986). The periodontium. En: Schroeder, H.E., ed. Handbook of microscopic Anatomy. Berlín: Springer, pp. 47-64.'
      },

      {
        'ref': '- Schroeder, H. E. y Listgarten, M. A. (1971). Fine structure of the developing epithelial attachment of human teeth, 2nd. Based: Karger, p. 146.'
      },

      {
        'ref': '- Schroeder, H. E. y Theilade, J. (1966). Electron microscopy of normal human gingival epithelium. Journal of periodontal research 1: 95-119.'
      },

      {
        'ref': '-Shultz-Haudt, S.P y Aas, E. (1972). Dynamics of the periodontal tissues. II, The connective tissue. Odontologisk Tidsskrift 70: 397-428.'
      },
    ]

    this.presentC2 = [
      {
        'tt': 'Capítulo 2',
        'present': 'En este sitio encontrará las referencias correspondientes al capítulo 2 de SmiLearning.'
      }
    ]

    this.bibliografia2 = [
      {
        'ref': '-Barker J, Mitra R, Griffith C, et al. Keratinocytes as initiators of inflammation. Lancet 337: 211-214, 1991.'
      },

      {
        'ref': '-Barnard NA, Scully C, Eveson JW, et al. Oral cancer development in patients with oral lichen planus. J Oral Pathol Med 22:421-424, 1993.'
      },

      {
        'ref': '-Boisnic S, Francis C, Branchet M-C, et al. Immunohistochemical study of oral lesions of lichen plano and contact lesions associated with amalgam. J Oral Pathol Med 19: 39-42, 1990.'
      },

      {
        'ref': '-Chou MJ, Daniels TE. Langerhans cells expressing HLA-DQ, HLA-DR and T6 antigens in normal oral mucosa and lichen planus. J Oral Pathol Med 18: 573-576.'
      },

      {
        'ref': '-Corso B, Eversole LR, Hutt – Fletcher L. Hairy leukoplakia: Epstein – Barr virus receptors on oral keratinocyte plasma membranes. Oral Surg Oral Pathol 67: 416-421, 1989.'
      },

      {
        'ref': '-Green TL, Greenspan JL, Greenspan D, De Souza YG. Oral lesions mimicking hairy leukoplakia: a diagnostic dilemma. Oral surg oral med Oral pathol 67: 422-426, 1989.'
      },

      {
        'ref': '-Pindborg JJ, Bronsle RB, Murti PR, et al.  Incidence and early forms of sub mucous fibrosis. Oral Surg Med Oral Pathol 50: 40-44, 1980.'
      }
    ]


    this.presentC3 = [
      {
        'tt': 'Capítulo 3',
        'present': 'En este sitio encontrará las referencias correspondientes al capítulo 3 de SmiLearning.'
      },
    ]

    this.bibliografia3 = [
      {
        'ref': ''
      }
    ]


    this.presentC4 = [
      {
        'tt': 'Capítulo 4',
        'present': 'En este sitio encontrará las referencias correspondientes al capítulo 4 de SmiLearning.'
      },
    ]

    this.bibliografia4 = [
      {
        'ref': ''
      }
    ]


    this.presentC5 = [
      {
        'tt': 'Capítulo 5',
        'present': 'En este sitio encontrará las referencias correspondientes al capítulo 5 de SmiLearning.'
      },
    ]

    this.bibliografia5 = [
      {
        'ref': ''
      }
    ]


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibligrafiaPage');
  }

}
