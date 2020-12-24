import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  /**
   * The items to show in the main menu.
   */
  public items: MenuItem[] = [];

  /**
   * @constructor
   * Constructor of the compomente object.
   * @param translateService {TranslateService} The service to get the translations from i18n.
   */
  constructor(private translateService: TranslateService) {}

  /**
   * @ignore
   * The init method.
   */
  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((language) => {
      this.loadTranslations(language.translations);
    });
  }

  private loadTranslations(translations?: any) {
    let translates: any;
    if (translations) {
      translates = translations;
    } else {
      this.translateService
        .get([
          'HOME',
          'LIST',
          'FORM',
          'GRAPHICS',
          'LANGUAGE',
          'SPANISH',
          'ENGLISH',
          'ARABIC',
        ])
        .subscribe((items) => {
          translates = items;
        });
    }
    if (translates) {
      this.items = this.initMenuItems(translates);
    }
  }

  /**
   * Method to load the items of the menu.
   */
  private initMenuItems(translates: any): MenuItem[] {
    return [
      {
        label: translates['HOME'],
        routerLink: '/home',
      },
      {
        label: translates['LIST'],
        routerLink: '/list',
      },
      {
        label: translates['FORM'],
        routerLink: '/form',
      },
      {
        label: translates['GRAPHICS'],
        routerLink: '/graphics',
      },
      {
        label: translates['LANGUAGE'],
        badge: 'es',
        items: [
          {
            label: translates['SPANISH'],
            command: (event) => this.changeLanguage('es'),
          },
          {
            label: translates['ENGLISH'],
            command: (event) => this.changeLanguage('en'),
          },
          {
            label: translates['ARABIC'],
            command: (event) => this.changeLanguage('ar'),
          },
        ],
      },
    ];
  }

  private changeLanguage(language: string): void {
    if (
      this.translateService?.getLangs().includes(language) &&
      this.translateService?.currentLang !== language
    ) {
      this.translateService.use(language);
    }
  }
}
