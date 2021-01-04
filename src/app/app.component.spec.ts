import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from '@modules/home/home.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormComponent } from '@pages/form/form.component';
import { GraphicsComponent } from '@modules/graphics/graphics.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { HeaderComponent } from '@shared/header/header.component';
import { MenuModule } from '@shared/menu/menu.module';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ListModule } from './modules/list/list.model';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        FormComponent,
        GraphicsComponent,
        NotFoundComponent,
      ],
      imports: [
        BrowserModule,
        HomeModule,
        HttpClientTestingModule,
        ListModule,
        MenuModule,
        TranslateModule.forRoot(),
        RouterTestingModule,
      ],
      providers: [TranslateService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
