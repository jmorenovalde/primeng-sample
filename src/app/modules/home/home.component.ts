import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images: any[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.images = this.loadImages();
  }

  private loadImages(): any[] {
    return [
      {
        previewImageSrc:
          'https://images.freeimages.com/images/large-previews/371/swiss-mountains-1362975.jpg',
        thumbnailImageSrc:
          'https://images.freeimages.com/images/small-previews/371/swiss-mountains-1362975.jpg',
        alt:
          'Foto de las montañas de Suiza de stock gratuita (www.freeimages.com)',
        title: 'Las montañas de Suiza',
      },
      {
        previewImageSrc:
          'https://images.freeimages.com/images/large-previews/fde/aliens-1-1373417.jpg',
        thumbnailImageSrc:
          'https://images.freeimages.com/images/small-previews/fde/aliens-1-1373417.jpg',
        alt: 'Foto de un crosscircle (www.freeimages.com)',
        title: 'Crosscircle',
      },
      {
        previewImageSrc:
          'https://images.freeimages.com/images/large-previews/b5a/dragon-fly-1391358.jpg',
        thumbnailImageSrc:
          'https://images.freeimages.com/images/small-previews/b5a/dragon-fly-1391358.jpg',
        alt: 'Foto de una libélula (www.freeimages.com)',
        title: 'Dragon Fly',
      },
      {
        previewImageSrc:
          'https://images.freeimages.com/images/large-previews/9f9/selfridges-2-1470748.jpg',
        thumbnailImageSrc:
          'https://images.freeimages.com/images/small-previews/9f9/selfridges-2-1470748.jpg',
        alt: 'Foto de la fachada de un edificio (www.freeimages.com)',
        title: 'Fachada de edificio',
      },
      {
        previewImageSrc:
          'https://images.freeimages.com/images/large-previews/81b/antelope-canyon-4-1396775.jpg',
        thumbnailImageSrc:
          'https://images.freeimages.com/images/small-previews/81b/antelope-canyon-4-1396775.jpg',
        alt: 'Foto un cañón (www.freeimages.com)',
        title: 'Cañon',
      },
      {
        previewImageSrc:
          'https://images.freeimages.com/images/large-previews/45f/garter-snake-1401165.jpg',
        thumbnailImageSrc:
          'https://images.freeimages.com/images/small-previews/45f/garter-snake-1401165.jpg',
        alt: 'Foto una culebra (www.freeimages.com)',
        title: 'Culebra',
      },
      {
        previewImageSrc:
          'https://images.freeimages.com/images/large-previews/e12/corn-field-1-1368931.jpg',
        thumbnailImageSrc:
          'https://images.freeimages.com/images/small-previews/e12/corn-field-1-1368931.jpg',
        alt: 'Foto de un campo de trigo (www.freeimages.com)',
        title: 'Campo de trigo',
      },
      {
        previewImageSrc:
          'https://images.freeimages.com/images/large-previews/24e/halloween-1563652.jpg',
        thumbnailImageSrc:
          'https://images.freeimages.com/images/small-previews/24e/halloween-1563652.jpg',
        alt: 'Foto de calabazas de halloween (www.freeimages.com)',
        title: 'Halloween',
      },
    ];
  }
}
