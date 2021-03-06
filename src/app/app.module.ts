import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MenuModule } from '@shared/menu/menu.module';
import { HomeModule } from '@modules/home/home.module';
import { GraphicsModule } from '@modules/graphics/graphics.model';
import { ListModule } from '@modules/list/list.module';
import { FormModule } from '@modules/form/form.module';

import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { AppComponent } from './app.component';

import { appRoutes } from './app.routes';

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
  declarations: [AppComponent, HeaderComponent, FooterComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormModule,
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
