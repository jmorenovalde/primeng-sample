import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgTruncatePipeModule } from '@pipes/truncate.pipe';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';

import { HomeComponent } from './home.component';
import { HomeService } from '../../services/home.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
