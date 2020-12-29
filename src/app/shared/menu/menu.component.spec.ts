import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MenubarModule } from 'primeng/menubar';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let translateService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [MenubarModule, TranslateModule.forRoot(), RouterTestingModule],
      providers: [TranslateService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    translateService = TestBed.inject(TranslateService);
    component = fixture.componentInstance;
    translateService.addLangs(['en', 'es', 'ar']);
    translateService.setDefaultLang('es');
    translateService.use('es');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('change language', () => {
    component['changeLanguage']('en');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
