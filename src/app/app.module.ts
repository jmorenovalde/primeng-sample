import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { appRoutes } from './app.routes';

import { MenuModule } from '@shared/menu/menu.module';
import { HomeModule } from '@modules/home/home.module';

import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { AppComponent } from './app.component';
import { ListComponent } from '@modules/list/list.component';
import { FormComponent } from '@pages/form/form.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { GraphicsModule } from './modules/graphics/graphics.model';
import { ListModule } from './modules/list/list.model';

/**
 * AoT requires an exported function for factories to the TranslateModule
 */
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

/**
 * Main module of the application.
 */
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, FormComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    GraphicsModule,
    HomeModule,
    HttpClientModule,
    ListModule,
    MenuModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
