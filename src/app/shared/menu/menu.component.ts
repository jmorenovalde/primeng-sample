import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

/**
 * Component for the menu bar of the application.
 */
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
   * Constructor of the compomente object.
   * @param translateService {TranslateService} The service to get the translations from i18n.
   * @constructor
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

  /**
   * Method get the translatios, if translatiosn is undefined, load form the TranslateService.
   */
  private loadTranslations(translations?: any) {
    if (translations) {
      this.items = this.initMenuItems(translations);
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
          this.items = this.initMenuItems(items);
        });
    }
  }

  /**
   * Method to load the items of the menu.
   * @param translates {any} the translates of the elements of the menu. The format is {key: value}.
   * @return {MenuItem[]} an array with the elements of the menu, in the language of the translates.
   *
   * > **NOTE**: if you want use command, you must put a arrow function, because it is a callback fuction.
   *   In this case, you will have the scope of the component.
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

  /**
   * This method is used to change the language of the aplication.
   */
  private changeLanguage(language: string): void {
    if (
      this.translateService?.getLangs().includes(language) &&
      this.translateService?.currentLang !== language
    ) {
      this.translateService.use(language);
    }
  }
}
