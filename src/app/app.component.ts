import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((language) => {
      this.direction = this.getDirectionContent(language.lang);
    });
  }

  private getDirectionContent(language: string): string {
    if (language === 'ar') {
      return 'rtl';
    } else {
      return 'ltr';
    }
  }
}
