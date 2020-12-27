import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { HomeService } from '@services/home.service';

import { Photo, Section } from '@models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public images$: Observable<Photo[]>;
  public sections$: Observable<Section[]>;

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

  constructor(
    private homeService: HomeService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((language) => {
      this.loadImages(language.lang);
      this.loadSections(language.lang);
    });
  }

  /**
   * Function to load the images.
   * @param language {string} the code of the language to the de images.
   */
  private loadImages(language: string): void {
    this.images$ = this.homeService.getGalleryPhotos(language);
  }

  private loadSections(language: string): void {
    this.sections$ = this.homeService.getSections(language);
  }
}
