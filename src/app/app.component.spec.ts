import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from '@modules/home/home.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { HeaderComponent } from '@shared/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ListModule } from '@modules/list/list.module';
import { GraphicsModule } from '@modules/graphics/graphics.model';
import { FormModule } from '@modules/form/form.module';
import { MenuModule } from '@shared/menu/menu.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent, FooterComponent, NotFoundComponent],
      imports: [
        BrowserModule,
        FormModule,
        GraphicsModule,
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
