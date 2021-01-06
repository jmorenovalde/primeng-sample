import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsComponent } from './graphics.component';
import { MalagaOpenDataService } from '../../services/malaga-open-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { ChartModule } from 'primeng/chart';

const strCVS = `"poiID","nombre","direccion","telefono","correoelectronico","latitude","longitude","altitud","capacidad","capacidad_discapacitados","fechahora_ultima_actualizacion","libres","libres_discapacitados","nivelocupacion_naranja","nivelocupacion_rojo","smassa_sector_sare"
1,"Salitre","Calle SalitreMÃ¡laga","","","36.7132149","-4.4276681","3.986444","342","None","None","303","None","17","5","None"
2,"Cervantes","Calle CervantesMÃ¡laga","","","36.7208633","-4.4119148","9.531203","414","None","None","342","None","22","5","None"
3,"El Palo","Calle Alonso Carrillo De AlbornozMÃ¡laga","","","36.721035","-4.3607192","8.069582","129","None","None","79","None","7","5","None"
4,"Av. de AndalucÃ­a","Avenida De AndalucÃ­a -  MÃ¡laga","","","36.7173271","-4.427712","7.358632","517","None","None","511","None","31","5","None"
5,"Camas","Calle Camas -  MÃ¡laga","","","36.7202072","-4.4244981","7.589293","320","None","None","310","None","23","5","None"
6,"Cruz De Humilladero","Plaza Cruz De HumilladeroMÃ¡laga","","","36.7118645","-4.4409118","9.336616","100","None","None","97","None","12","5","None"
8,"Alcazaba","Plaza La AlcazabaMÃ¡laga","","","36.7224312","-4.4165168","14.149522","344","None","None","328","None","27","5","None"
9,"San Juan De La Cruz","Compositor Lemberg Ruiz - 29007 MÃ¡laga (MÃ¡laga)","952612642","","36.717865","-4.4332781","8.787301","350","None","None","342","None","35","5","None"
10,"Pz. de la Marina","Plaza De La MarinaMÃ¡laga","","","36.7174149","-4.4200468","3.109754","400","None","None","384","None","23","5","None"
12,"TejÃ³n y Rodriguez","Calle TejÃ³n Y RodriguezMÃ¡laga","","","36.7235985","-4.4214821","10.485368","170","None","None","115","None","13","5","None"
138,"El Carmen","","","","0.0","0.0","0.0","-1","None","None","-1","None","19","5","None"
139,"MÃ¡rmoles","","","","0.0","0.0","0.0","-1","None","None","-1","-1","10","5","12"
140,"El Limonar","Limonar -  MÃ¡laga (MÃ¡laga)","","","0.0","0.0","0.0","161","0","None","-1","-1","16","8","16"
142,"BailÃ©n","BailÃ©n -  MÃ¡laga (MÃ¡laga)","","","0.0","0.0","0.0","None","None","None","-1","-1","None","None","16"`;

describe('GraphicsComponent', () => {
  let component: GraphicsComponent;
  let fixture: ComponentFixture<GraphicsComponent>;
  let malagaOpenDataService: any;

  const malagaOpenDataServiceStub = jasmine.createSpyObj('MalagaOpenDataService', ['getParkingInfoCSV']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphicsComponent],
      imports: [
        HttpClientTestingModule,
        CardModule,
        ChartModule,
        CommonModule,
        SkeletonModule,
        TranslateModule.forRoot(),
      ],
      providers: [{ provider: MalagaOpenDataService, useValue: malagaOpenDataServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsComponent);
    malagaOpenDataService = TestBed.inject(MalagaOpenDataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Load data from service', () => {
    const spy = spyOn(malagaOpenDataService, 'getParkingInfoCSV').and.returnValue(of(strCVS));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.items).toBeTruthy();
    expect(component.items.length).toBe(10);
  });

  it('storage data in the lines graph', () => {
    const spy = spyOn(malagaOpenDataService, 'getParkingInfoCSV').and.returnValue(of(strCVS));
    component.ngOnInit();
    fixture.detectChanges();
    component['loadData']();
    expect(component.dataset.datasets).toBeTruthy();
    expect(component.dataset.datasets.length).toBe(10);
    expect(component.dataset.datasets[0].data).toBeTruthy();
    expect(component.dataset.datasets[0].data.length).toBe(2);
  });
});
