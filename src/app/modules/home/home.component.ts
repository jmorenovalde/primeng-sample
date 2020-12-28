import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';

import { HomeService } from '@services/home.service';

import { Photo, Post, Section } from '@models/models';

/**
 * This is the HomeComponent class, it is used to show the home section of the menu.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   * This observable is used to load the information of the gallery.
   */
  public images$: Observable<Photo[]>;

  /**
   * This observable is used to load the sections of the tabs.
   */
  public sections$: Observable<Section[]>;

  /**
   * This observable is used to load the post items.
   */
  public posts$: Observable<Post[]>;

  /**
   * Responseive options for the Gallery PrimeNG Component.
   */
  public responsiveOptions: any[] = [
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

  /**
   * The constructor of the component
   * @param homeService {HomeService} Get the informations to the home page.
   * @param translateService {TranslateService} Provide the translations and detect the change into the language
   * @constructor
   */
  constructor(
    private homeService: HomeService,
    private translateService: TranslateService
  ) {}

  /**
   * @ignore
   * The init method
   */
  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((language) => {
      this.loadImages(language.lang);
      this.loadSections(language.lang);
      this.loadPosts(language.lang);
    });
  }

  /**
   * Function to load the images.
   * @param language {string} the code of the language to the images.
   */
  private loadImages(language: string): void {
    this.images$ = this.homeService.getGalleryPhotos(language);
  }

  /**
   *
   * @param language {string} the code of the language to the sections.
   */
  private loadSections(language: string): void {
    this.sections$ = this.homeService.getSections(language);
  }

  /**
   * Get only the first 4 posts.
   * @param language {string} the code of the language to the posts.
   */
  private loadPosts(language: any) {
    this.posts$ = this.homeService
      .getPost(language)
      .pipe(map((val) => val.slice(0, 4)));
  }
}
