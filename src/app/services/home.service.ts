import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Photo, Section } from '@models/models';

/**
 * This service is a Fake service to return information to the home component.
 */
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  /**
   * This method return the information of the photos from the language.
   * @param language {string} the string of the code of the lenguage.
   */
  public getGalleryPhotos(language: string): Observable<Photo[]> {
    switch (language) {
      case 'es':
        return of([
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/371/swiss-mountains-1362975.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/371/swiss-mountains-1362975.jpg',
            link: 'https://www.freeimages.com/es/photo/swiss-mountains-1362975',
            alt:
              'Foto de las montañas de Suiza de stock gratuita (www.freeimages.com)',
            title: 'Las montañas de Suiza',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/fde/aliens-1-1373417.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/fde/aliens-1-1373417.jpg',
            link: 'https://www.freeimages.com/es/photo/aliens-1-1373417',
            alt: 'Foto de un crosscircle (www.freeimages.com)',
            title: 'Crosscircle',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/b5a/dragon-fly-1391358.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/b5a/dragon-fly-1391358.jpg',
            link: 'https://www.freeimages.com/es/photo/dragon-fly-1391358',
            alt: 'Foto de una libélula (www.freeimages.com)',
            title: 'Dragon Fly',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/9f9/selfridges-2-1470748.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/9f9/selfridges-2-1470748.jpg',
            link: 'https://www.freeimages.com/es/photo/selfridges-2-1470748',
            alt: 'Foto de la fachada de un edificio (www.freeimages.com)',
            title: 'Fachada de edificio',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/81b/antelope-canyon-4-1396775.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/81b/antelope-canyon-4-1396775.jpg',
            link:
              'https://www.freeimages.com/es/photo/antelope-canyon-4-1396775',
            alt: 'Foto un cañón (www.freeimages.com)',
            title: 'Cañon',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/45f/garter-snake-1401165.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/45f/garter-snake-1401165.jpg',
            link: 'https://www.freeimages.com/es/photo/garter-snake-1401165',
            alt: 'Foto una culebra (www.freeimages.com)',
            title: 'Culebra',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/e12/corn-field-1-1368931.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/e12/corn-field-1-1368931.jpg',
            link: 'https://www.freeimages.com/es/photo/corn-field-1-1368931',
            alt: 'Foto de un campo de trigo (www.freeimages.com)',
            title: 'Campo de trigo',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/24e/halloween-1563652.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/24e/halloween-1563652.jpg',
            link: 'https://www.freeimages.com/es/photo/halloween-1563652',
            alt: 'Foto de calabazas de halloween (www.freeimages.com)',
            title: 'Halloween',
          },
        ]);
      case 'ar':
        return of([
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/371/swiss-mountains-1362975.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/371/swiss-mountains-1362975.jpg',
            link: 'https://www.freeimages.com/es/photo/swiss-mountains-1362975',
            alt: 'صورة مخزون مجانية للجبال السويسرية (www.freeimages.com)',
            title: 'جبال سويسرا',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/fde/aliens-1-1373417.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/fde/aliens-1-1373417.jpg',
            link: 'https://www.freeimages.com/photo/aliens-1-1373417',
            alt: 'صورة لدائرة متقاطعة (www.freeimages.com)',
            title: 'عبر الدائرة',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/b5a/dragon-fly-1391358.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/b5a/dragon-fly-1391358.jpg',
            link: 'https://www.freeimages.com/photo/dragon-fly-1391358',
            alt: 'صورة ليعسوب (www.freeimages.com)',
            title: 'اليعسوب',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/9f9/selfridges-2-1470748.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/9f9/selfridges-2-1470748.jpg',
            link: 'https://www.freeimages.com/photo/selfridges-2-1470748',
            alt: 'صورة لواجهة مبنى (www.freeimages.com)',
            title: 'واجهة المبنى',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/81b/antelope-canyon-4-1396775.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/81b/antelope-canyon-4-1396775.jpg',
            link: 'https://www.freeimages.com/photo/antelope-canyon-4-1396775',
            alt: 'صورة مدفع (www.freeimages.com)',
            title: 'كانيون',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/45f/garter-snake-1401165.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/45f/garter-snake-1401165.jpg',
            link: 'https://www.freeimages.com/photo/garter-snake-1401165',
            alt: 'صورة ثعبان (www.freeimages.com)',
            title: 'ثعبان',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/e12/corn-field-1-1368931.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/e12/corn-field-1-1368931.jpg',
            link: 'https://www.freeimages.com/photo/corn-field-1-1368931',
            alt: 'صورة لحقل قمح (www.freeimages.com)',
            title: 'حقل القمح',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/24e/halloween-1563652.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/24e/halloween-1563652.jpg',
            link: 'https://www.freeimages.com/photo/halloween-1563652',
            alt: 'صورة لقرع الهالوين (www.freeimages.com)',
            title: 'عيد الرعب',
          },
        ]);
      default:
        return of([
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/371/swiss-mountains-1362975.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/371/swiss-mountains-1362975.jpg',
            link: 'https://www.freeimages.com/photo/swiss-mountains-1362975',
            alt: 'Photo of Swiss mountains (www.freeimages.com)',
            title: 'Swiss mountains',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/fde/aliens-1-1373417.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/fde/aliens-1-1373417.jpg',
            link: 'https://www.freeimages.com/photo/aliens-1-1373417',
            alt: 'Photo of a crosscircle (www.freeimages.com)',
            title: 'Crosscircle',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/b5a/dragon-fly-1391358.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/b5a/dragon-fly-1391358.jpg',
            link: 'https://www.freeimages.com/photo/dragon-fly-1391358',
            alt: 'Photo of a dragon fly (www.freeimages.com)',
            title: 'Dragon Fly',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/9f9/selfridges-2-1470748.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/9f9/selfridges-2-1470748.jpg',
            link: 'https://www.freeimages.com/photo/selfridges-2-1470748',
            alt: 'Photo of the facade of a building (www.freeimages.com)',
            title: 'Facade of a building',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/81b/antelope-canyon-4-1396775.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/81b/antelope-canyon-4-1396775.jpg',
            link: 'https://www.freeimages.com/photo/antelope-canyon-4-1396775',
            alt: 'Photo of the antelope canyon (www.freeimages.com)',
            title: 'Antelope Canyon',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/45f/garter-snake-1401165.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/45f/garter-snake-1401165.jpg',
            link: 'https://www.freeimages.com/photo/garter-snake-1401165',
            alt: 'Photo of a snake (www.freeimages.com)',
            title: 'Snake',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/e12/corn-field-1-1368931.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/e12/corn-field-1-1368931.jpg',
            link: 'https://www.freeimages.com/photo/corn-field-1-1368931',
            alt: 'Photo of a wheat field (www.freeimages.com)',
            title: 'Wheat field',
          },
          {
            previewImageSrc:
              'https://images.freeimages.com/images/large-previews/24e/halloween-1563652.jpg',
            thumbnailImageSrc:
              'https://images.freeimages.com/images/small-previews/24e/halloween-1563652.jpg',
            link: 'https://www.freeimages.com/photo/halloween-1563652',
            alt: 'Photo of Halloween pumpkins (www.freeimages.com)',
            title: 'Halloween Pumpkins',
          },
        ]);
    }
  }

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
}
