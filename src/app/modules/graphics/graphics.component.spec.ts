import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsComponent } from './graphics.component';
import { MalagaOpenDataService } from '../../services/malaga-open-data.service';

describe('GraphicsComponent', () => {
  let component: GraphicsComponent;
  let fixture: ComponentFixture<GraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphicsComponent],
      imports: [],
      providers: [MalagaOpenDataService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
