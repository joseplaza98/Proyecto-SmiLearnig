import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BusquedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {

  public isSearchbarOpened = false;
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.initializeItems();

  }

  initializeItems() {
    this.items = [
      {
        'title': 'Anatomía del periodonto',
        'description': 'El Periodonto  tambíen llamado "aparato de inserción" o "tejidos de sostén del diente", establece una unidad funcional, biológica y evolutiva que experimienta algunas modificaciones con la edad y además está sujeta a alteraciones morfológicas y funcionales, así como a modificaciones debidas a alteraciones del medio bucal',

      },
      {
        'title': 'Encía Papilar',
        'description': 'Es aquella parte de la encía que ocupa los espacios interproximales entre la superficie de contacto de los dientes y la porción más coronal del hueso alveolar',

      },
      {

        'title': 'Encía adherida',
        'description': 'Está constituida por tejido conectivo fibroso denso dispuesto regularmente, firmemente anclado a la superficie del hueso alveolar y cemento radicular y tapizada por el epitelio escamoso estratificado querantinizado',

      },
      {

        'title': 'Límite externo',
        'description': 'Está constituida por tejido conectivo fibroso denso dispuesto regularmente, firmemente anclado a la superficie del hueso alveolar y cemento radicular y tapizada por el epitelio escamoso estratificado querantinizado',

      },

      {
        'title': 'Encía',
        'description': 'La EncÍa se define comon el tejido cubierto por el epitelio que recubre el proceso alveolar y rodea la porción cervical de los dientes ',

      },
      {
        'title': 'Encía marginal o libre',
        'description': 'Rodea el cuello de los dientes, desde el margen gingival hastaa una pequeña hendidura o surco marginal libre, que la separa de la encía insertda. Tiene un tamaño constante de alrededor de 1mm ',

      },
      {
        'title': 'Surco gingival',
        'description': 'El surco gingival se constituye una vez el diente hace erupción en la cavidad oral, tiene forma de V y se extiende en toda la circuferencia del diente, sus limites son: La pared dentaria, la porcíon más coronal del epitelio de únion y el epitelio surcular ',

      },
      {
        'title': 'Mucosa bucal',
        'description': 'La mucosa bucal (membrana mucosa) se continúa con la piel de los labios y con la mucosa del paladar blando y la faringe',

      },

      {
        'title': 'Epitelio de unión',
        'description': 'Consiste en una banda de células epiteliales, tiene un espesor de 3 ó 4 capas celulares en edad temprana y aumenta con la edad de 10 a 20 capas. Este epitelio se renueva durante toda la vida. Tiene forma triangula cuyo vértice se localiza apicalmente mientras su base es coronal',
      },
      {
        'title': 'Union dentoalveolar',
        'description': 'Es el aparato de sostén que alberga al diente en el alvéolo y que comprende el ligamento periodontal, cemento radicular y hueso alveolar',

      },
      {
        'title': 'Ligamento periodontal',
        'description': 'Es un tejido conectivo vascularizado y celular que rodea los dientes y une el cemento radicular con la lámina dura del hueso alveolar propio',

      },
      {
        'title': 'Cemento radicular',
        'description': 'Se define como el tejido mesénquima, calcificado que constituye la cubierta de la raíz anatómica, tiene muchos rasgos en común con el tejido óseo, hitológicamente se ha definido la presencia de 2 tipos de cemento',
        'dd1': ' Acelular: Que parece tener origen embrionario y posiblemente origen ectodermal y que no tiene la capacidad reparativa',
        'dd2': 'Celular: De origen mesénquima que puede recuperarse por acción de los cementoblastos que migran del ligamento peridotal',

      },

      {
        'title': 'Hueso alveolar',
        'description': 'Es la parte del tejido óseo de los maxilares que alberga y sostiene los dientes y por tanto constituye la pared del alvéolo, radiograficamente se aprecia como una linea radiopaca y recibe el nombre de lámina dura que constituye la lámina cribiforme donde se insertan las fibras de  Sharpey',
      },
      {
        'title': 'El queratinocito',
        'description': 'Experimenta una diferenciación continua en su camino desde la capa basal hasta la superficie del epitelio. Así una vez que el queratinocito abandona la membrana basal ya no puede dividirse, pero conserva la capacidad de producción de proteinas',

      },
      {
        'title': 'Tejido conectivo',
        'description': 'El tejido predominante de encía y el ligamento peridontal es el conectivo. Los componentes principales del tejido conectivo son las fibras colágenas, fibroblastos, vasos, nervios y matriz ',

      },

      {
        'title': 'Fibras colagenas',
        'description': 'El diente está unido al hueso por haces de fibra colágenas que puede dividirse en los siguientes grupos principales',
        'dd1': 'Fibras principales: Son haces de fibra colágenas que siguen un recorrido ondulado, travesando el espacio periodontal en sentido oblicuo e insertándose en el cemento y el hueso alveolar, esta se distribuye en los siguientes grupos',
        'dd2': '1 Grupo transeptables: Se extienden interproximalmente sobre la cresta alveolar y se inserta en el cemento del diente adyacente',
        'dd3': '2 Grupo de la cresta alveolar: Se extiende oblicuamente desde el cemento, inmediatamente debajo de la inserción epitelial, hasta la cresta alveolar',
        'dd4': '3 Horizontal: Se extiende en ángulo recto respecto al eje mayor al diente, desde el cemento hacia el hueso alveolar, con el grupo anterior equilibran el empuje coronario de las fibras apicales e impiden los movimientos laterales del diente',
        'dd5': '4 Grupo oblicuo: Se extiende desde el cemento en dirección coronaria, en sentido oblicuo respecto al hueso. En el grupo más grande del ligamento periodontal. Soporta las fuerzas masticatorias y las trnsforman en tensión sobre el hueso alveolar',
        'dd6': '5. Grupo apical: Se extiende desde el cemento hasta el hueso en el fondo del alveolo. Contrarresta las fuerzas que tienden a extruir el deinte del alveolo, no existe raíces incompletas',
        'dd7': '6 Grupo interarticular: Solo se encuentra cuando existe más de una raíz. Su función evitar la rotación y los movimientos de lateralidad',
        'dd8': '7. Otras fibras: Son haces de fibras que se interdigitan en ángulo recto o se extienden sin regularidad alrededor de los haces de fibras ordenados o entre ellas',

      },

      {
        'title': 'Sistema linfatico del periodonto',
        'description': 'Los vasos linfáticos más pequeños, los capilares linfáticos, forman una amplia red en el tejido conectivo. La pared de capilar linfático se compone de una capa única de células endoteliales. Por esta razón, estos capilares son difíciles de identificar en un corte histológico',

      },


      {
        'title': 'Lesiones blancas ',
        'description': 'Las lesiones de color blanco en la mucosa bucal deben su aspecto característico a la dspersión de la luz a traves de una superficie alterada',
      },

      {
        'title': 'Leucodema',
        'description': 'Hace parte de las lesiones blancas, afecta un 50% de personas de raza blanza y 90% de afroamericana; opacificacion uniforme en ambos lados de la mucosa bucal.Presenta a temprana edad',

      },

      {
        'title': 'Nevo esponjoso blanco',
        'description': 'Asintomatico, bilateral, denso, velludo, blanco o gris, opacificacion generalizada; la mucosa bucal es la principalmente dañada, pero tambien puede afectar otras menbranas; raro.',

      },
      {
        'title': 'Disqueratosis Intraepitelial Benigna Hereditaria',
        'description': 'Asintomatico, difusa, velluda, lesiones blancas de las mucosas bucal y tambien de otros tejidos; lesiones oculares: placas blancas rodeadas por conjuntiva inflamada; rara.',

      },
      {
        'title': 'Queratosis folicular',
        'description': 'Lesiones queratosicas papulares de la piel y,con poca frecuencias, mucosa; las anomalias son abundantes y asintomaticas',

      },
      {
        'title': 'Hiperqueratosis focal (Friccional)',
        'description': 'Placas blancas asintomaticas, por lo comun sobre bordes edentulos, mucosa bucal y lengua ; no desaparece al frotarlas',

      },
      {
        'title': 'Lesiones blancas relacionadas con tabaco no fumado',
        'description': 'Asintomaticas, con pliegues que rodean el area donde se mantiene estatico el tabaco ; suelen encontrarse en labios y vestibulo de la boca; comun.',

      },
      {
        'title': 'Estomatitis nicotinica',
        'description': 'Asintomatico, opacificacion generalizada del paladar con puntos rojos que representan orificios de glandulas salivares; comun',

      },
      {
        'title': 'Queilitis solar',
        'description': 'Labio inferior: epiteliio atrofiado, poca definicion entre borde rojo labial y borde de la piel, zonas focales de queratosis',

      },
      {
        'title': 'Leucplaquia idiopatica',
        'description': 'Placa blanca asintomatica; no desaparece al frotarla; afecta con frecuencia a hobres que a mujeres',

      },
      {
        'title': 'Leucplaquia pilosa (Vellosa)',
        'description': 'Placa filiforme o plana sobre los lados de la lengua, a menudo bilateral, en ocasiones sobre la mucosa bucal; asintomatico',

      },

      {
        'title': 'Lengua pilosa',
        'description': 'Alargamiento de las papilas filiformes; asintomatica.',

      },
      {
        'title': 'Lengua geográfica',
        'description': 'Lesiones anulares blancas con centro atrofiado de color rojo; patron migrante hacia el dorso de la lengua, varia en intensidad y puede desaparecer de manera espontanea, en ocasiones dolorosa; comuimagen',
      },
      {
        'title': 'Liquen plano',
        'description': 'Estrias blancas bilaterales (Wickham), asintomatico salvo cuando hay erosion; en ocasiones se observa papulas pruriginosas de color purpura; aparece en personas de edad mediana, la mucosa bucal es regularmente dañada con lesiones ocasionales sobre lengua, gingiva y paladar, antebrazo y porcion inferior de la pierna con areas cutaneas afectadas mas a menudo; infrecuente.',
      
      },
      {
        'title': 'Esfacelo reacciona con dentrifico',
        'description': 'Asintomatico, esfacelo de celulas paraqueratosicas delgadas.',

      },
      {
        'title': 'Candidiasis',
        'description': 'Placa dolorosas prominentes (hongos) que pueden dejar una superficie erosionada y sangrante; se relaciona con falta de higiene, antibioticos sistemicos, enfermedad sistemica, debilitamiento, reaccion inmunitaria desminuida  las infecciones cronicas producen a veces mucosa eritematosa sin colonias blancas evidentes; comun',

      },
      {
        'title': 'Quemadura en la mucosa.',
        'description': 'Exudado fibrinoso de color blanco que cubre una ulcera superficial dolorosa con anillo eritematosos; comun.',

      },
      {
        'title': 'Fibrosis submocosa.',
        'description': 'Areas de opacificacion con perdida de la elasticidad, cualquier region de la boca puede dañarse, rara.',

      },
      {
        'title': 'Granulos de Fordyce',
        'description': 'Multiples puntos asintomaticos, amarillos, planos o prominentes observados principalmente en mucosa bucal y labios; se presenta la mayoria de pacientes muchos los consideran como una variacion de lo  normal',

      },
      {
        'title': 'Tejido linfoide ectopico',
        'description': 'Nodulos asintomaticos prominentes de color amarillo con menos de 0.5 cm de diametro; en general se encuentran sobre los pilares tonsilares, porcion postero lateral de la lengua y piso de la boca; cubiertos por epitelio intacto comun.',

      },
      {
        'title': 'Quiste gingival',
        'description': 'Nodulo pequeño, por lo regular de color blanco o amarillo; multiple en lactante, raro en adultos.',

      },
      {
        'title': 'Parulis',
        'description': 'Tumefaccion gingival de color amarillo blanquecino a causa de pus en la submucosa.',

      },
      {
        'title': 'Lipoma',
        'description': 'Tumefaccion asintomatica de crecimiento lento, bien cirscunscrita, de color amarillo o amarillo blanquecino; neoplasia rara benigna de grasa, se presenta en cualquier area.',

      },
      {
        'title': 'Periodonto',
        'description': 'El periodonto es un conjunto de tejidos dinámicos cuya función vital es dar el soporte a los órganos dentarios, así como, proveer un reservorio de células para mantener la homeostasis, y favorecer la regeneración o reparación de los tejidos perdidos por enfermedad',
        'dd1': 'Los tejidos que componen el periodonto son dos tejidos blandos: encía y ligamento periodontal y dos tejidos mineralizados: hueso alveolar y cemento radicular',

      },

      {
        'title': 'Patologia bucal',
        'description': 'La patología bucal interviene en el diagnóstico y tratamiento de numerosas condiciones que afectan la salud oral',

      },

      {
        'title': 'Histopatológica en la enfermedad periodontal inflamatoria crónica',
        'description': 'Pacientes seleccionados (ausencia de enfermedades sistémicas) en el departamento de patología bucal, Facultad de odontología con diagnostico clinico de gingivitis crónica y periodontitis, con la finalidad de conocer los principales cambios que se producen en el epitelio y lamina propia.',
        'dd2': 'El analisis de las muestras de biopsias obtenidas demostró la alta correspondencia del diagnóstico clinico y los hallazgos histomorfologicos encontrados, lo cual corrobora una serie de estudios realizados a nivel mundial',

      },
      {
        'title': 'Limite externo',
        'description': ' Se extiende desde el margen hasta la línea mucogingival y se ha denominado encía. La encía se define como el tejido cubierto por epitelio que recubre el proceso alveolar y rodea la porción cervical de los dientes, ésta se continúa con el ligamento periodontal y con el resto de la mucosa de la cavidad oral.     Por sus características histológicas, la encía también ha sido denominada encía queratinizada y se divide por sus características estructurales en encía marginal o libre, encía papilar y encía adherida.Las funciones son de protección a estímulos, a fuerzas mecánicas, externas y físicas, así como constituye una parte importante en la estética facial.',
      },

      {
        'title': 'Anatomía macroscopica',
        'description': ' La mucosa bucal (membrana mucosa) se continúa con la piel de los labios y con la mucosa del paladar blando y la faringe. La membrana mucosa se compone de:',
        'dd1': '1. Mucosa masticatoria que incluye la encía y el recubrimiento del paladar duro.',
        'dd2': '2. La mucosa especializada cubre el dorso de la lengua',
        'dd3': '3. La parte restante, llamada mucosa tapizante. La encía es parte de la mucosa masticatoria que recubre la apófisis alveolar y rodea la porción cervical de los dientes. La encía adquiere su forma y textura con la erupción dentaria.',
      
      },


    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {

      this.items = this.items.filter((item) => {
        return item.title.toLowerCase().indexOf(val.toLowerCase()) > -1;


      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

}
