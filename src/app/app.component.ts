import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Main componet of the application, it's lanched on the application Boostrap.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   * Variable to indicate the direction of the page, LeftToRight or RightToLeft (arabic language).
   */
  public direction = 'ltr';

  /**
   * Constructor method.
   * In this case has code because it's needed to inizializate the translateService.
   * @param translateService the service for the translates.
   */
  constructor(private translateService: TranslateService) {
    translateService.addLangs(['en', 'es', 'ar']);
    translateService.setDefaultLang('es');
    const browserLang = translateService.getBrowserLang();
    const language = browserLang.match(/en|es|ar/) ? browserLang : 'es';
    translateService.use(language);
    if (language === 'ar') {
      this.direction = 'rtl';
    }
  }

  /**
   *  @ignore
   * Init method
   */
  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((language) => {
      this.direction = this.getDirectionContent(language.lang);
    });
  }

  /**
   * Method to get the direction of the language.
   */
  private getDirectionContent(language: string): string {
    if (language === 'ar') {
      return 'rtl';
    } else {
      return 'ltr';
    }
  }
}
