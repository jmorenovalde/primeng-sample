import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Photo, Post, Section } from '@models/models';

/**
 * This service is a Fake service to return information to the home component.
 */
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  /**
   * @ignore
   */
  constructor() {}

  /**
   * This method return the information of the photos from the language.
   * @param language the string of the code of the lenguage.
   */
  public getGalleryPhotos(language: string): Observable<Photo[]> {
    switch (language) {
      case 'es':
        return this.responseSpanishPhotos();
      case 'ar':
        return this.responseArabicPhotos();
      default:
        return this.responseEnglishPhotos();
    }
  }

  /**
   * This method provide to the fake method the contnent of Spanish photos.
   * @returns return an array with the Spanish photos.
   */
  private responseSpanishPhotos(): Observable<Photo[]> {
    return of([
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/371/swiss-mountains-1362975.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/371/swiss-mountains-1362975.jpg',
        link: 'https://www.freeimages.com/es/photo/swiss-mountains-1362975',
        alt: 'Foto de las montañas de Suiza de stock gratuita (www.freeimages.com)',
        title: 'Las montañas de Suiza',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/fde/aliens-1-1373417.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/fde/aliens-1-1373417.jpg',
        link: 'https://www.freeimages.com/es/photo/aliens-1-1373417',
        alt: 'Foto de un crosscircle (www.freeimages.com)',
        title: 'Crosscircle',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/b5a/dragon-fly-1391358.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/b5a/dragon-fly-1391358.jpg',
        link: 'https://www.freeimages.com/es/photo/dragon-fly-1391358',
        alt: 'Foto de una libélula (www.freeimages.com)',
        title: 'Dragon Fly',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/9f9/selfridges-2-1470748.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/9f9/selfridges-2-1470748.jpg',
        link: 'https://www.freeimages.com/es/photo/selfridges-2-1470748',
        alt: 'Foto de la fachada de un edificio (www.freeimages.com)',
        title: 'Fachada de edificio',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/81b/antelope-canyon-4-1396775.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/81b/antelope-canyon-4-1396775.jpg',
        link: 'https://www.freeimages.com/es/photo/antelope-canyon-4-1396775',
        alt: 'Foto un cañón (www.freeimages.com)',
        title: 'Cañon',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/45f/garter-snake-1401165.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/45f/garter-snake-1401165.jpg',
        link: 'https://www.freeimages.com/es/photo/garter-snake-1401165',
        alt: 'Foto una culebra (www.freeimages.com)',
        title: 'Culebra',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/e12/corn-field-1-1368931.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/e12/corn-field-1-1368931.jpg',
        link: 'https://www.freeimages.com/es/photo/corn-field-1-1368931',
        alt: 'Foto de un campo de trigo (www.freeimages.com)',
        title: 'Campo de trigo',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/24e/halloween-1563652.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/24e/halloween-1563652.jpg',
        link: 'https://www.freeimages.com/es/photo/halloween-1563652',
        alt: 'Foto de calabazas de halloween (www.freeimages.com)',
        title: 'Halloween',
      },
    ]);
  }

  /**
   * This method provide to the fake method the contnent of Arabic photos.
   * @returns return an array with the Arabic photos.
   */
  private responseArabicPhotos(): Observable<Photo[]> {
    return of([
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/371/swiss-mountains-1362975.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/371/swiss-mountains-1362975.jpg',
        link: 'https://www.freeimages.com/es/photo/swiss-mountains-1362975',
        alt: 'صورة مخزون مجانية للجبال السويسرية (www.freeimages.com)',
        title: 'جبال سويسرا',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/fde/aliens-1-1373417.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/fde/aliens-1-1373417.jpg',
        link: 'https://www.freeimages.com/photo/aliens-1-1373417',
        alt: 'صورة لدائرة متقاطعة (www.freeimages.com)',
        title: 'عبر الدائرة',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/b5a/dragon-fly-1391358.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/b5a/dragon-fly-1391358.jpg',
        link: 'https://www.freeimages.com/photo/dragon-fly-1391358',
        alt: 'صورة ليعسوب (www.freeimages.com)',
        title: 'اليعسوب',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/9f9/selfridges-2-1470748.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/9f9/selfridges-2-1470748.jpg',
        link: 'https://www.freeimages.com/photo/selfridges-2-1470748',
        alt: 'صورة لواجهة مبنى (www.freeimages.com)',
        title: 'واجهة المبنى',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/81b/antelope-canyon-4-1396775.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/81b/antelope-canyon-4-1396775.jpg',
        link: 'https://www.freeimages.com/photo/antelope-canyon-4-1396775',
        alt: 'صورة مدفع (www.freeimages.com)',
        title: 'كانيون',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/45f/garter-snake-1401165.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/45f/garter-snake-1401165.jpg',
        link: 'https://www.freeimages.com/photo/garter-snake-1401165',
        alt: 'صورة ثعبان (www.freeimages.com)',
        title: 'ثعبان',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/e12/corn-field-1-1368931.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/e12/corn-field-1-1368931.jpg',
        link: 'https://www.freeimages.com/photo/corn-field-1-1368931',
        alt: 'صورة لحقل قمح (www.freeimages.com)',
        title: 'حقل القمح',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/24e/halloween-1563652.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/24e/halloween-1563652.jpg',
        link: 'https://www.freeimages.com/photo/halloween-1563652',
        alt: 'صورة لقرع الهالوين (www.freeimages.com)',
        title: 'عيد الرعب',
      },
    ]);
  }

  /**
   * This method provide to the fake method the contnent of English photos.
   * @returns return an array with the English photos.
   */
  private responseEnglishPhotos(): Observable<Photo[]> {
    return of([
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/371/swiss-mountains-1362975.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/371/swiss-mountains-1362975.jpg',
        link: 'https://www.freeimages.com/photo/swiss-mountains-1362975',
        alt: 'Photo of Swiss mountains (www.freeimages.com)',
        title: 'Swiss mountains',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/fde/aliens-1-1373417.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/fde/aliens-1-1373417.jpg',
        link: 'https://www.freeimages.com/photo/aliens-1-1373417',
        alt: 'Photo of a crosscircle (www.freeimages.com)',
        title: 'Crosscircle',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/b5a/dragon-fly-1391358.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/b5a/dragon-fly-1391358.jpg',
        link: 'https://www.freeimages.com/photo/dragon-fly-1391358',
        alt: 'Photo of a dragon fly (www.freeimages.com)',
        title: 'Dragon Fly',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/9f9/selfridges-2-1470748.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/9f9/selfridges-2-1470748.jpg',
        link: 'https://www.freeimages.com/photo/selfridges-2-1470748',
        alt: 'Photo of the facade of a building (www.freeimages.com)',
        title: 'Facade of a building',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/81b/antelope-canyon-4-1396775.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/81b/antelope-canyon-4-1396775.jpg',
        link: 'https://www.freeimages.com/photo/antelope-canyon-4-1396775',
        alt: 'Photo of the antelope canyon (www.freeimages.com)',
        title: 'Antelope Canyon',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/45f/garter-snake-1401165.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/45f/garter-snake-1401165.jpg',
        link: 'https://www.freeimages.com/photo/garter-snake-1401165',
        alt: 'Photo of a snake (www.freeimages.com)',
        title: 'Snake',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/e12/corn-field-1-1368931.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/e12/corn-field-1-1368931.jpg',
        link: 'https://www.freeimages.com/photo/corn-field-1-1368931',
        alt: 'Photo of a wheat field (www.freeimages.com)',
        title: 'Wheat field',
      },
      {
        previewImageSrc: 'https://images.freeimages.com/images/large-previews/24e/halloween-1563652.jpg',
        thumbnailImageSrc: 'https://images.freeimages.com/images/small-previews/24e/halloween-1563652.jpg',
        link: 'https://www.freeimages.com/photo/halloween-1563652',
        alt: 'Photo of Halloween pumpkins (www.freeimages.com)',
        title: 'Halloween Pumpkins',
      },
    ]);
  }

  /**
   * This method return the information of the section from the language.
   * @param language the string of the code of the lenguage.
   * @returns return an array with the sections.
   */
  public getSections(language: string): Observable<Section[]> {
    switch (language) {
      case 'es':
        return this.responseSpanishSectios();
      case 'ar':
        return this.responseArabicSectios();
      default:
        return this.responseEnglishSectios();
    }
  }

  /**
   * This method provide to the fake method the contnent of Spanish sections.
   * @returns return an array with the sections.
   */
  private responseSpanishSectios(): Observable<Section[]> {
    return of([
      {
        id: 1,
        name: 'Primera',
        content: `Este es el contenido de la primera sección.
        <br><br>
        Para ver el funcionamieto, lo normal sería meter unos cuantos párrafos con el Lorem Ipsum, pero como quiero que aparezca con caracteres árabes en la sección de árabe, escribo un texto en un idioma y lo traduzco a los demás idiomas.
        <br><br>
        Para concuir, si quieres más información del funcionamiento mira el fichero README.md o ve a mi Github.`,
      },
      {
        id: 2,
        name: 'Segunda',
        content: `Este es el contenido de la segunda sección.
        <br><br>
        <img src="https://images.freeimages.com/images/small-previews/b5a/dragon-fly-1391358.jpg" style="float: right">
        En esta sección a demás de poner texto, vamos a poner una imagen, que hace que se vea la pontencia de las tabs de <em>PrimeNG<em>, donde se pueden meter componentes dentro de las tabs, con lo que podemos hacer aplicaciones muy complejas.`,
      },
      {
        id: 3,
        name: 'Tercera',
        content: 'Este es el contenido de la tercera sección sección.',
      },
    ]);
  }

  /**
   * This method provide to the fake method the contnent of Arabic sections.
   * @returns return an array with the sections.
   */
  private responseArabicSectios(): Observable<Section[]> {
    return of([
      {
        id: 1,
        name: 'أول',
        content: `هذا هو محتوى القسم الأول.
        <br><br>
        لمعرفة كيفية عملها ، فإن الشيء الطبيعي هو وضع بضع فقرات مع Lorem Ipsum ، ولكن بما أنني أريد أن تظهر مع الأحرف العربية في القسم العربي ، فأنا أكتب نصًا بلغة واحدة وأترجمه إلى اللغات الأخرى.
        <br><br>
        في الختام ، إذا كنت تريد المزيد من المعلومات حول كيفية عمله ، فراجع ملف README.md أو انتقل إلى Github الخاص بي.`,
      },
      {
        id: 2,
        name: 'ثانيا',
        content: `هذا هو مضمون القسم الثاني.
        <br><br>
        <img src = "https://images.freeimages.com/images/small-previews/b5a/dragon-fly-1391358.jpg" style = "float: right">
        في هذا القسم بالإضافة إلى وضع النص ، سنضع صورة توضح قوة علامات التبويب <em>PrimeNG<em> ، حيث يمكنك وضع المكونات داخل علامات التبويب ، والتي يمكننا من خلالها إنشاء تطبيقات معقد جدا.`,
      },
      {
        id: 3,
        name: 'الثالث',
        content: 'هذا هو محتوى القسم الثالث.',
      },
    ]);
  }

  /**
   * This method provide to the fake method the contnent of English sections.
   * @returns return an array with the sections.
   */
  private responseEnglishSectios(): Observable<Section[]> {
    return of([
      {
        id: 1,
        name: 'First',
        content: `This is the content of the first section.
        <br><br>
        To see how it works, the normal thing would be to put a few paragraphs with the Lorem Ipsum, but since I want it to appear with Arabic characters in the Arabic section, I write a text in one language and translate it into the other languages.
        <br><br>
        To conclude, if you want more information on how it works, look at the README.md file or go to my Github.`,
      },
      {
        id: 2,
        name: 'Second',
        content: `This is the content of the second section.

        <img
                   src = "https://images.freeimages.com/images/small-previews/b5a/dragon-fly-1391358.jpg"
                   style = "float: right">
        In this section in addition to putting text, we are going to put an image, which shows the power of the <em> PrimeNG <em> tabs, where you can put components inside the tabs, with which we can make applications very complex.`,
      },
      {
        id: 3,
        name: 'Third',
        content: 'This is the content of the third section section.',
      },
    ]);
  }

  /**
   * This method return the information of the companies from the language.
   * @param language the string of the code of the lenguage.
   * @returns return an array with the Posts.
   */
  public getPost(language: string): Observable<Post[]> {
    switch (language) {
      case 'es':
        return this.responseSpanishPosts();
      case 'ar':
        return this.responseArabicPosts();
      default:
        return this.responseEnglishPosts();
    }
  }

  /**
   * This method provide to the fake method the contnent of Spanish posts.
   * @returns return an array with the posts.
   */
  private responseSpanishPosts(): Observable<Post[]> {
    return of([
      {
        id: 1,
        name: 'Indra',
        content: `Indra es una de las principales compañías globales de tecnología y consultoría y el socio tecnológico para las operaciones clave de los negocios de sus clientes en todo el mundo. Es un proveedor líder mundial de soluciones propias en segmentos específicos de los mercados de Transporte y Defensa, y la empresa líder en consultoría de transformación digital y Tecnologías de la Información en España y Latinoamérica a través de su filial Minsait. Su modelo de negocio está basado en una oferta integral de productos propios, con un enfoque end-to-end, de alto valor y con un elevado componente de innovación. En el ejercicio 2019, Indra tuvo unos ingresos de 3.204 millones de euros,  mas de 49.000 empleados, presencia local en 46 países y operaciones comerciales en más de 140 países.`,
      },
      {
        id: 2,
        name: 'Cash-Converters',
        content: `Cash Converters es la única franquicia mundial especializada en la Compra Venta de artículos de segunda mano. Fundada en 1984, esta multinacional de origen australiano se ha consolidado en su sector, gracias a su know-how depurado y contrastado con más de 500 tiendas por todo el mundo. Es un concepto absolutamente innovador, que ha revolucionado el mercado de la segunda mano en todo el mundo.`,
      },
      {
        id: 3,
        name: 'DXC Technology',
        content: `DXC Technology es una compañía global de servicios de IT que gestiona y moderniza los sistemas de misión crítica integrándolos con nuevas soluciones digitales para conseguir mejores resultados de negocio para los clientes. Nuestro alcance global y talento, las plataformas de innovación, la independencia tecnológica y nuestra extensa red de socios son claves para nuestro éxito.`,
      },
      {
        id: 4,
        name: 'Accenture',
        content: `Accenture Limited es una empresa multinacional de consultoría estratégica, servicios tecnológicos y de outsourcing. Fue constituida en Hamilton, Bermudas, aunque el día 26 de mayo de 2009 se anunció la aprobación por parte del comité ejecutivo del traslado de su domicilio social a Irlanda. La revista Fortune la incluyó en su lista de las 500 mayores empresas en nivel de ingresos, cuenta con más de 469.000 empleados en 120 países, en octubre de 2015 empleaba solo en España a unos 10.000 profesionales.​ En el año fiscal finalizado el 31 de agosto de 2010, la compañía declaró unos ingresos netos de 23.090 millones de dólares estadounidenses.`,
      },
      {
        id: 5,
        name: 'Everis',
        content: `Nos dedicamos a la consultoría y outsourcing abarcando todos los sectores del ámbito económico, llegando a facturar en el último ejercicio fiscal 1.454 millones de euros. Somos una gran familia formada por más de 27.000 profesionales repartidos por Europa, USA y Latinoamérica. En 2014 nuestra familia se hizo más grande ya que nos unimos al grupo NTT DATA, la sexta empresa de servicios IT del mundo, con más de 130.000 profesionales y presencia en Asia-Pacífico, Oriente Medio, Europa, Latinoamérica y Norteamérica.`,
      },
    ]);
  }

  /**
   * This method provide to the fake method the contnent of Arabic posts.
   * @returns return an array with the posts.
   */
  private responseArabicPosts(): Observable<Post[]> {
    return of([
      {
        id: 1,
        name: 'Indra',
        content: `Indra هي واحدة من الشركات العالمية الرائدة في مجال التكنولوجيا والاستشارات والشريك التكنولوجي للعمليات الرئيسية لأعمال عملائها في جميع أنحاء العالم. إنها مزود عالمي رائد للحلول الخاصة في قطاعات محددة من أسواق النقل والدفاع ، والشركة الرائدة في التحول الرقمي واستشارات تكنولوجيا المعلومات في إسبانيا وأمريكا اللاتينية من خلال فرعها Minsait. يعتمد نموذج أعمالها على عرض شامل لمنتجاتها الخاصة ، مع نهج شامل وذا قيمة عالية ومكون عالي للابتكار. في عام 2019 ، حققت إندرا إيرادات بلغت 3204 مليون يورو ، وأكثر من 49 ألف موظف ، ووجود محلي في 46 دولة وعمليات تجارية في أكثر من 140 دولة.`,
      },
      {
        id: 2,
        name: 'Cash Converters',
        content: `Cash Converters هو الامتياز العالمي الوحيد المتخصص في بيع وشراء السلع المستعملة. تأسست في عام 1984 ، هذا الأصل الأسترالي متعدد الجنسيات رسخ مكانته في قطاعه ، بفضل خبرته المكررة والمثبتة مع أكثر من 500 متجر حول العالم. إنه مفهوم مبتكر تمامًا أحدث ثورة في سوق السلع المستعملة في جميع أنحاء العالم.`,
      },
      {
        id: 3,
        name: 'DXC Technology',
        content: `DXC Technology هي شركة عالمية لخدمات تكنولوجيا المعلومات تدير وتحدّث الأنظمة ذات المهام الحرجة من خلال دمجها مع الحلول الرقمية الجديدة لتحقيق نتائج أعمال أفضل للعملاء. إن وصولنا العالمي ومواهبنا ومنصات الابتكار والاستقلال التكنولوجي وشبكة شركائنا الواسعة هي مفاتيح نجاحنا.`,
      },
      {
        id: 4,
        name: 'Accenture',
        content: `Accenture Limited هي شركة استشارات إستراتيجية متعددة الجنسيات وخدمات تكنولوجية واستعانة بمصادر خارجية. تأسست في هاميلتون ، برمودا ، على الرغم من أنه في 26 مايو 2009 ، تم الإعلان عن موافقة اللجنة التنفيذية على نقل مكتبها المسجل إلى أيرلندا. أدرجتها مجلة Fortune في قائمتها لأكبر 500 شركة من حيث الدخل ، ولديها أكثر من 469000 موظف في 120 دولة ، وفي أكتوبر 2015 ، وظفت حوالي 10000 متخصص في إسبانيا وحدها ، في السنة المالية المنتهية في 31 ديسمبر أغسطس 2010 ، سجلت الشركة صافي دخل قدره 23.09 مليار دولار أمريكي.`,
      },
      {
        id: 5,
        name: 'Everis',
        content: `نحن ملتزمون بالاستشارات والاستعانة بمصادر خارجية تغطي جميع القطاعات الاقتصادية ، وبلغ حجم مبيعاتها 1،454 مليون يورو في السنة المالية الماضية. نحن عائلة كبيرة تتكون من أكثر من 27000 محترف منتشرون في جميع أنحاء أوروبا والولايات المتحدة الأمريكية وأمريكا اللاتينية. في عام 2014 ، نمت عائلتنا بشكل أكبر حيث انضممنا إلى مجموعة NTT DATA ، وهي سادس أكبر شركة لخدمات تكنولوجيا المعلومات في العالم ، مع أكثر من 130،000 محترف ووجود في آسيا والمحيط الهادئ والشرق الأوسط وأوروبا وأمريكا اللاتينية وأمريكا الشمالية.`,
      },
    ]);
  }

  /**
   * This method provide to the fake method the contnent of English posts.
   * @returns return an array with the posts.
   */
  private responseEnglishPosts(): Observable<Post[]> {
    return of([
      {
        id: 1,
        name: 'Indra',
        content: `Indra is one of the leading global technology and consulting companies and the technology partner for the key operations of its clients' businesses around the world. It is a leading global provider of proprietary solutions in specific segments of the Transport and Defense markets, and the leading company in digital transformation and Information Technology consulting in Spain and Latin America through its subsidiary Minsait. Its business model is based on a comprehensive offer of its own products, with an end-to-end approach, high value and with a high component of innovation. In 2019, Indra had revenues of 3,204 million euros, more than 49,000 employees, a local presence in 46 countries and commercial operations in more than 140 countries.`,
      },
      {
        id: 2,
        name: 'Cash-Converters',
        content: `Cash Converters is the only global franchise specialized in buying and selling second-hand items. Founded in 1984, this multinational of Australian origin has established itself in its sector, thanks to its refined and proven know-how with more than 500 stores around the world. It is an absolutely innovative concept, which has revolutionized the second hand market all over the world.`,
      },
      {
        id: 3,
        name: 'DXC Technology',
        content: `DXC Technology is a global IT services company that manages and modernizes mission-critical systems by integrating them with new digital solutions to achieve better business results for clients. Our global reach and talent, innovation platforms, technological independence, and our extensive network of partners are key to our success.`,
      },
      {
        id: 4,
        name: 'Accenture',
        content: `Accenture Limited is a multinational strategic consulting, technology services and outsourcing company. It was incorporated in Hamilton, Bermuda, although on May 26, 2009 the approval by the executive committee of the transfer of its registered office to Ireland was announced. Fortune magazine included it in its list of the 500 largest companies in terms of income, it has more than 469,000 employees in 120 countries, and in October 2015 it employed around 10,000 professionals in Spain alone.In the fiscal year ended on December 31 August 2010, the company reported net income of US $ 23.09 billion.`,
      },
      {
        id: 5,
        name: 'Everis',
        content: `We are dedicated to consulting and outsourcing covering all sectors of the economic sphere, reaching a turnover of 1,454 million euros in the last fiscal year. We are a large family made up of more than 27,000 professionals spread throughout Europe, the USA and Latin America. In 2014, our family grew bigger as we joined the NTT DATA group, the sixth largest IT services company in the world, with more than 130,000 professionals and a presence in Asia-Pacific, the Middle East, Europe, Latin America and North America.`,
      },
    ]);
  }
}
