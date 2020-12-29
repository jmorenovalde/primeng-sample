import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgTruncatePipeModule } from '@pipes/truncate.pipe';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';

import { HomeComponent } from './home.component';
import { HomeService } from '../../services/home.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;
  let translateService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        CardModule,
        GalleriaModule,
        TabViewModule,
        TranslateModule.forRoot(),
        NgTruncatePipeModule,
      ],
      providers: [TranslateService, HomeService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    translateService = TestBed.inject(TranslateService);
    translateService.addLangs(['en', 'es', 'ar']);
    translateService.setDefaultLang('es');
    translateService.use('es');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('change language', () => {
    // This test is used to check the html template.
    translateService.use('en');
    fixture.detectChanges();
    expect(component).toBeTruthy();
    // check gallery: in this case check the number of thumbnails, will be 8.
    const thumbnails = el.queryAll(By.css('.p-galleria-thumbnail-item'));
    expect(thumbnails).toBeTruthy('Could not find thumnbails');
    expect(thumbnails.length).toBe(8, 'Incorrect of number of thumbnails');
    // check the tabs
    const tabs = el.queryAll(By.css('.p-tabview-title'));
    expect(tabs).toBeTruthy('Could not find tabs title');
    expect(tabs.length).toBe(3, 'Incorrect of number of tabs');
    // check cards
    const cards = el.queryAll(By.css('.p-card'));
    expect(cards).toBeTruthy('Could not find cards');
    expect(cards.length).toBe(4, 'Incorrect of number of cards');
  });
});
