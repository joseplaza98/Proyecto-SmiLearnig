import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


/**Congresos, bibliografias, secuencia y libros */

import { AgendaCongresosPage } from '../pages/Bibliografias/agenda-congresos/agenda-congresos';
import { PresentBibliografiaPage } from '../pages/Bibliografias/present-bibliografia/present-bibliografia';
import { BibligrafiaPage } from '../pages/Bibliografias/bibligrafia/bibligrafia';
import { LibrosConsultaPage } from '../pages/Bibliografias/libros-consulta/libros-consulta';
import { SecuenciaDidacticaPage } from '../pages/Bibliografias/secuencia-didactica/secuencia-didactica';

/**Login y progress*/
import { HttpModule } from '@angular/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { ProgressService } from '../services/progress.service';

/**DErechos y autoria */
import { AboutPage } from '../pages/about/about';
import { ConsentimientoInfoPage } from '../pages/Derechos Uso/consentimiento-info/consentimiento-info';
import { TerminCondPage } from '../pages/Derechos Uso/termin-cond/termin-cond';
import { DerAutoPage } from '../pages/Derechos Uso/der-auto/der-auto';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/Sesion/login/login';
import { RegisterPage } from '../pages/Sesion/register/register';
import { TabsPage } from '../pages/tabs/tabs';

/**Chat foro para socializar ideas */
import { ChatForoPage } from '../pages/chat-foro/chat-foro';

/**Paginas post login */

import { PagPrincipalPage } from '../pages/pag-principal/pag-principal';
import { BusquedaPage } from '../pages/busqueda/busqueda';
import { TemarioPage } from '../pages/temario/temario';


/**Secciones de Tema 1: Anatomia del Periodonto */

import { PresentAnaPeriodontoPage } from '../pages/Temas/Tema 1/present-ana-periodonto/present-ana-periodonto';
import { AnaPeriodontoPage } from '../pages/Temas/Tema 1/ana-periodonto/ana-periodonto';
import { Subt1MacroPage } from '../pages/Temas/Tema 1/subt1-macro/subt1-macro';
import { TipCementPage } from '../pages/Temas/Tema 1/tip-cement/tip-cement'
import { LigaPeriodoncialPage } from '../pages/Temas/Tema 1/liga-periodoncial/liga-periodoncial';
import { CasosT1_1Page } from '../pages/Temas/Tema 1/Casos de Estudio/casos-t1-1/casos-t1-1';
import { CasosT1_2Page } from '../pages/Temas/Tema 1/Casos de Estudio/casos-t1-2/casos-t1-2';
import { CasosT1_3Page } from '../pages/Temas/Tema 1/Casos de Estudio/casos-t1-3/casos-t1-3';
import { CasosT1_2NotasPage } from '../pages/Temas/Tema 1/Casos de Estudio/casos-t1-2-notas/casos-t1-2-notas';
import { CasosT1_3NotasPage } from '../pages/Temas/Tema 1/Casos de Estudio/casos-t1-3-notas/casos-t1-3-notas';

/**Secciones de Tema 2: Patologia bucal */
import { PresentPatoBucalPage } from '../pages/Temas/Tema 2/present-pato-bucal/present-pato-bucal';


/**subtema 2 
*ContenidoTema2Page es el contenedor de los demas subtemas siguientes
*Enfermedades hereditarias
*Lesiones reactivas
*Otras lesiones blancas
*Lesiones no epiteliales blanco amarillentas
*/
import { ContenidoTema2Page } from '../pages/Temas/Tema 2/contenido-tema2/contenido-tema2';
import { LesionesBlancasPage } from '../pages/Temas/Tema 2/lesiones-blancas/lesiones-blancas';

/**Enfermedades hereditarias*/

import { PresentEnfHerPage } from '../pages/Temas/Tema 2/present-enf-her/present-enf-her';
import { LeucodemaPage } from '../pages/Temas/Tema 2/Lesiones/Enfermedades hereditarias/leucodema/leucodema';
import { NevuEsponBlandPage } from '../pages/Temas/Tema 2/Lesiones/Enfermedades hereditarias/nevu-espon-bland/nevu-espon-bland';
import { DisqueratosisPage } from '../pages/Temas/Tema 2/Lesiones/Enfermedades hereditarias/disqueratosis/disqueratosis';
import { QueratosisPage } from '../pages/Temas/Tema 2/Lesiones/Enfermedades hereditarias/queratosis/queratosis';

/**Lesiones reactivas */

import { PresentLesReacPage } from '../pages/Temas/Tema 2/present-les-reac/present-les-reac';
import { HiperqueratosisPage } from '../pages/Temas/Tema 2/Lesiones/Lesiones reactivas/hiperqueratosis/hiperqueratosis';
import { LbRelaTabacoPage } from '../pages/Temas/Tema 2/Lesiones/Lesiones reactivas/lb-rela-tabaco/lb-rela-tabaco';
import { EstomatitisPage } from '../pages/Temas/Tema 2/Lesiones/Lesiones reactivas/estomatitis/estomatitis';
import { QueilitisPage } from '../pages/Temas/Tema 2/Lesiones/Lesiones reactivas/queilitis/queilitis';

/**Lesiones no epiteliales blanco amarillentas */

import { PresentLesNoEpitPage } from '../pages/Temas/Tema 2/present-les-no-epit/present-les-no-epit';
import { CandidiasisPage } from '../pages/Temas/Tema 2/Lesiones/Lesiones no epiteliales/candidiasis/candidiasis';
import { QuemaMucosaPage } from '../pages/Temas/Tema 2/Lesiones/Lesiones no epiteliales/quema-mucosa/quema-mucosa';
import { FibroSubmucoPage } from '../pages/Temas/Tema 2/Lesiones/Lesiones no epiteliales/fibro-submuco/fibro-submuco';
import { GranulosFordycePage } from '../pages/Temas/Tema 2/Lesiones/Lesiones no epiteliales/granulos-fordyce/granulos-fordyce';
import { TejLinfoideEctopicoPage } from '../pages/Temas/Tema 2/Lesiones/Lesiones no epiteliales/tej-linfoide-ectopico/tej-linfoide-ectopico';
import { QuistGingivalPage } from '../pages/Temas/Tema 2/Lesiones/Lesiones no epiteliales/quist-gingival/quist-gingival';
import { ParulisPage } from '../pages/Temas/Tema 2/Lesiones/Lesiones no epiteliales/parulis/parulis';
import { LipomaPage } from '../pages/Temas/Tema 2/Lesiones/Lesiones no epiteliales/lipoma/lipoma';

/**Otras lesiones blandas */

import { PresentOtrasPage } from '../pages/Temas/Tema 2/present-otras/present-otras';
import { LeucoplaquiaIdiopatPage } from '../pages/Temas/Tema 2/Lesiones/Otros/leucoplaquia-idiopat/leucoplaquia-idiopat';
import { LeucoplaquiaPilPage } from '../pages/Temas/Tema 2/Lesiones/Otros/leucoplaquia-pil/leucoplaquia-pil';
import { LengPilosaPage } from '../pages/Temas/Tema 2/Lesiones/Otros/leng-pilosa/leng-pilosa';
import { LengGeogPage } from '../pages/Temas/Tema 2/Lesiones/Otros/leng-geog/leng-geog';
import { LiquenPlanPage } from '../pages/Temas/Tema 2/Lesiones/Otros/liquen-plan/liquen-plan';
import { EsfaceloPage } from '../pages/Temas/Tema 2/Lesiones/Otros/esfacelo/esfacelo';


/**Secciones de Tema 2: Patologia bucal */
import { PresentTem3Page } from '../pages/Temas/Tema 3/present-tem3/present-tem3';
import { PresentLabExaPage } from '../pages/Temas/Tema 3/present-lab-exa/present-lab-exa';
import { PresentLabPatobPage } from '../pages/Temas/Tema 3/present-lab-patob/present-lab-patob';

/**Seccion A.1 */
import { ExamenInterpretacionCortePage } from '../pages/Temas/Tema 3/A.1/examen-interpretacion-corte/examen-interpretacion-corte';
import { LabBioloPeriodontPage } from '../pages/Temas/Tema 3/A.1/lab-biolo-periodont/lab-biolo-periodont';

/**Seccion A.2 */
import { LabPatobucalPage } from '../pages/Temas/Tema 3/A.2/lab-patobucal/lab-patobucal';
import { PatobucPage } from '../pages/Temas/Tema 3/A.2/patobuc/patobuc';
import { AnexoLabc3Page } from '../pages/Temas/Tema 3/A.2/anexo-labc3/anexo-labc3'


/**seccion capitulo 4 */
import { PresentClinPaPage } from '../pages/Temas/Tema 4/present-clin-pa/present-clin-pa';

/**subtema capitulo 4 */
import { AnalisisClinCap4Page } from '../pages/Temas/Tema 4/analisis-clin-cap4/analisis-clin-cap4';
/**Tabla capitulo 4 */
import { AnexoA1Cap4Page } from '../pages/Temas/Tema 4/anexo-a1-cap4/anexo-a1-cap4';






/**Secciones de Tema 5: Presentacion Casos Clínicos */
import { PresentCasClinPage } from '../pages/Temas/Tema 5/present-cas-clin/present-cas-clin';
import { SeccionCasClinPage } from '../pages/Temas/Tema 5/seccion-cas-clin/seccion-cas-clin';

/**Caso clinico A1 */
import { CasClinA1Page } from '../pages/Temas/Tema 5/cas-clin-a1/cas-clin-a1';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/**Tema 6 */

import { PresentTema6Page } from '../pages/Temas/Tema 6/present-tema6/present-tema6';
import { Evalucion1T1Page } from '../pages/Temas/Tema 6/Evaluaciones/evalucion1-t1/evalucion1-t1';
import { Evalucion2T2Page } from '../pages/Temas/Tema 6/Evaluaciones/evalucion2-t2/evalucion2-t2';
import { Evalucion3T3Page } from '../pages/Temas/Tema 6/Evaluaciones/evalucion3-t3/evalucion3-t3';
import { Evalucion4T4Page } from '../pages/Temas/Tema 6/Evaluaciones/evalucion4-t4/evalucion4-t4';
import { Evalucion5T5Page } from '../pages/Temas/Tema 6/Evaluaciones/evalucion5-t5/evalucion5-t5';
import { Practica1T1Page } from '../pages/Temas/Tema 6/Evaluaciones/practica1-t1/practica1-t1';
import { Evaluacion3_2T3Page } from '../pages/Temas/Tema 6/Evaluaciones/evaluacion3-2-t3/evaluacion3-2-t3';


export const firebaseConfig = {
  apiKey: "AIzaSyD6AgQGFO9KMRQIU9sQvLHn84PgEHbGYHk",
  authDomain: "chatsml.firebaseapp.com",
  databaseURL: "https://chatsml.firebaseio.com",
  projectId: "chatsml",
  storageBucket: "chatsml.appspot.com",
  messagingSenderId: "410148902782"
};

@NgModule({
  declarations: [
    MyApp,

    /**Derechos de uso */
    AboutPage,
    ConsentimientoInfoPage,
    TerminCondPage,
    DerAutoPage,

    ContactPage,
    HomePage,
    LoginPage,
    RegisterPage,
    TabsPage,

    PagPrincipalPage,
    BusquedaPage,
    TemarioPage,

    /**Congresos, bibliografias, secuencia y libros */
    AgendaCongresosPage,
    PresentBibliografiaPage,
    BibligrafiaPage,
    LibrosConsultaPage,
    SecuenciaDidacticaPage,

    /**Chat foro para socializar ideas */
    ChatForoPage,

    /**Tema 1: Anatomia del periodonto */

    PresentAnaPeriodontoPage,
    AnaPeriodontoPage,
    Subt1MacroPage,
    TipCementPage,
    LigaPeriodoncialPage,
    CasosT1_1Page,
    CasosT1_2Page,
    CasosT1_3Page,
    CasosT1_2NotasPage,
    CasosT1_3NotasPage,

    /**Tema 2: Patologia bucal */
    ContenidoTema2Page,
    PresentPatoBucalPage,


    /**Subtema 2 */
    LesionesBlancasPage,

    /**Enfermedades hereditarias*/

    PresentEnfHerPage,
    LeucodemaPage,
    NevuEsponBlandPage,
    DisqueratosisPage,
    QueratosisPage,

    /**Lesiones reactivas */
    PresentLesReacPage,
    HiperqueratosisPage,
    LbRelaTabacoPage,
    EstomatitisPage,
    QueilitisPage,

    /**Otras lesiones blandas */
    PresentOtrasPage,
    LeucoplaquiaIdiopatPage,
    LeucoplaquiaPilPage,
    LengPilosaPage,
    LengGeogPage,
    LiquenPlanPage,
    EsfaceloPage,

    /**Lesiones no epiteliales blanco amarillentas */
    PresentLesNoEpitPage,
    CandidiasisPage,
    QuemaMucosaPage,
    FibroSubmucoPage,
    GranulosFordycePage,
    TejLinfoideEctopicoPage,
    QuistGingivalPage,
    ParulisPage,
    LipomaPage,

    /**Tema 3 Laboratorios y examenes */
    PresentTem3Page,
    PresentLabExaPage,
    PresentLabPatobPage,

    /**A.1 */
    ExamenInterpretacionCortePage,
    LabBioloPeriodontPage,

    /**A.2 */

    PatobucPage,
    LabPatobucalPage,
    AnexoLabc3Page,

    /**Seccion Capitulo 4 */
    PresentClinPaPage,
    AnalisisClinCap4Page,
    AnexoA1Cap4Page,


    /**Subtema 5 */
    PresentCasClinPage,
    SeccionCasClinPage,

    /**Casos */
    /**Caso Clinico A1 */
    CasClinA1Page,

    /**Tema 6 */
    PresentTema6Page,
    Evalucion1T1Page,
    Evalucion2T2Page,
    Evalucion3T3Page,
    Evalucion4T4Page,
    Evalucion5T5Page,
    Practica1T1Page,
    Evaluacion3_2T3Page,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    /**Derechos de uso */
    AboutPage,
    ConsentimientoInfoPage,
    TerminCondPage,
    DerAutoPage,

    ContactPage,
    HomePage,
    LoginPage,
    RegisterPage,
    TabsPage,

    PagPrincipalPage,
    BusquedaPage,
    TemarioPage,

    /**Congresos, bibliografias, secuencia y libros */
    AgendaCongresosPage,
    PresentBibliografiaPage,
    BibligrafiaPage,
    LibrosConsultaPage,
    SecuenciaDidacticaPage,

    /**Chat foro para socializar ideas */
    ChatForoPage,

    /**Tema 1: Anatomia del periodonto */

    PresentAnaPeriodontoPage,
    AnaPeriodontoPage,
    Subt1MacroPage,
    TipCementPage,
    LigaPeriodoncialPage,
    CasosT1_1Page,
    CasosT1_2Page,
    CasosT1_3Page,
    CasosT1_2NotasPage,
    CasosT1_3NotasPage,

    /***Tema 2: Patologia bucal */
    ContenidoTema2Page,
    PresentPatoBucalPage,


    /**Subtema 2 */
    LesionesBlancasPage,

    /**Enfermedades hereditarias*/

    PresentEnfHerPage,
    LeucodemaPage,
    NevuEsponBlandPage,
    DisqueratosisPage,
    QueratosisPage,

    /**Lesiones reactivas */
    PresentLesReacPage,
    HiperqueratosisPage,
    LbRelaTabacoPage,
    EstomatitisPage,
    QueilitisPage,

    /**Otras lesiones blandas */
    PresentOtrasPage,
    LeucoplaquiaIdiopatPage,
    LeucoplaquiaPilPage,
    LengPilosaPage,
    LengGeogPage,
    LiquenPlanPage,
    EsfaceloPage,

    /**Lesiones no epiteliales blanco amarillentas */
    PresentLesNoEpitPage,
    CandidiasisPage,
    QuemaMucosaPage,
    FibroSubmucoPage,
    GranulosFordycePage,
    TejLinfoideEctopicoPage,
    QuistGingivalPage,
    ParulisPage,
    LipomaPage,

    /**Tema 3 Laboratorios y examenes */
    PresentTem3Page,
    PresentLabExaPage,
    PresentLabPatobPage,

    /**A.1 */
    ExamenInterpretacionCortePage,
    LabBioloPeriodontPage,

    /**A.2 */

    PatobucPage,
    LabPatobucalPage,
    AnexoLabc3Page,


    /**Seccion Capitulo 4 */
    PresentClinPaPage,
    AnalisisClinCap4Page,
    AnexoA1Cap4Page,
    /**Subtema 5 */
    PresentCasClinPage,
    SeccionCasClinPage,

    /**Casos */
    /**Caso Clinico A1 */
    CasClinA1Page,

    /**Tema 6 */
    PresentTema6Page,
    Evalucion1T1Page,
    Evalucion2T2Page,
    Evalucion3T3Page,
    Evalucion4T4Page,
    Evalucion5T5Page,
    Practica1T1Page,
    Evaluacion3_2T3Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    ProgressService,
  ]
})
export class AppModule { }
