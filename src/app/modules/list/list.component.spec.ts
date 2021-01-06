import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { JuntaAndaluciaOpenDataService } from '../../services/junta-andalucia-open-data.service';
import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let juntaAndaluciaOpenDataService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [
        CommonModule,
        FormsModule,
        HttpClientTestingModule,
        MultiSelectModule,
        TableModule,
        TranslateModule.forRoot(),
      ],
      providers: [JuntaAndaluciaOpenDataService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    juntaAndaluciaOpenDataService = TestBed.inject(JuntaAndaluciaOpenDataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('service recieve data', () => {
    expect(component).toBeTruthy();
  });

  it('Spy data', () => {
    spyOn(juntaAndaluciaOpenDataService, 'getProperties').and.returnValue(JADPropertiesMock);
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});

//#region Mockdata
export const JADPropertiesMock: Observable<any> = of({
  'http://icms-v2-0-pub.junta-andalucia.es/recursos/jda_buscador_bienes_inmuebles/10010': {
    'http://www.juntadeandalucia.es/2009/ods/provincia': [
      {
        type: 'literal',
        value: 'MÁLAGA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/naturaleza': [
      {
        type: 'literal',
        value: 'URBANA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/num_inventario': [
      {
        type: 'literal',
        value: '2000004416',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/calle': [
      {
        type: 'literal',
        value: 'DEPOSITO (CERRO DE LA CRUZ)',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nid': [
      {
        type: 'literal',
        value: '10010',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/municipio': [
      {
        type: 'literal',
        value: 'ANTEQUERA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/uso_actual': [
      {
        type: 'literal',
        value: 'DOCENTE',
      },
    ],
    'http://purl.org/dc/elements/1.1/modified': [
      {
        type: 'literal',
        value: '<![CDATA[2020-06-08T12:14:24.000Z]]>',
        datatype: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/consejeria_agencia': [
      {
        type: 'literal',
        value: 'CONSEJERÍA DE EDUCACIÓN Y DEPORTE',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nombre_activo': [
      {
        type: 'literal',
        value: 'VERACRUZ',
      },
    ],
  },
  'http://icms-v2-0-pub.junta-andalucia.es/recursos/jda_buscador_bienes_inmuebles/10004': {
    'http://www.juntadeandalucia.es/2009/ods/provincia': [
      {
        type: 'literal',
        value: 'MÁLAGA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/num_inventario': [
      {
        type: 'literal',
        value: '2000004374',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/naturaleza': [
      {
        type: 'literal',
        value: 'URBANA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/calle': [
      {
        type: 'literal',
        value: 'PERIODISTA FEDERICO ALBA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nid': [
      {
        type: 'literal',
        value: '10004',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/municipio': [
      {
        type: 'literal',
        value: 'TORREMOLINOS',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/uso_actual': [
      {
        type: 'literal',
        value: 'DOCENTE',
      },
    ],
    'http://purl.org/dc/elements/1.1/modified': [
      {
        type: 'literal',
        value: '<![CDATA[2020-06-08T12:14:24.000Z]]>',
        datatype: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/consejeria_agencia': [
      {
        type: 'literal',
        value: 'CONSEJERÍA DE EDUCACIÓN Y DEPORTE',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nombre_activo': [
      {
        type: 'literal',
        value: 'IES COSTA DEL SOL',
      },
    ],
  },
  'http://icms-v2-0-pub.junta-andalucia.es/recursos/jda_buscador_bienes_inmuebles/10009': {
    'http://www.juntadeandalucia.es/2009/ods/provincia': [
      {
        type: 'literal',
        value: 'MÁLAGA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/naturaleza': [
      {
        type: 'literal',
        value: 'URBANA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/num_inventario': [
      {
        type: 'literal',
        value: '2000004415',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/calle': [
      {
        type: 'literal',
        value: 'PICADERO',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nid': [
      {
        type: 'literal',
        value: '10009',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/municipio': [
      {
        type: 'literal',
        value: 'ANTEQUERA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/uso_actual': [
      {
        type: 'literal',
        value: 'DOCENTE',
      },
    ],
    'http://purl.org/dc/elements/1.1/modified': [
      {
        type: 'literal',
        value: '<![CDATA[2020-06-08T12:14:24.000Z]]>',
        datatype: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/consejeria_agencia': [
      {
        type: 'literal',
        value: 'CONSEJERÍA DE EDUCACIÓN Y DEPORTE',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nombre_activo': [
      {
        type: 'literal',
        value: 'NIÑO JESUS Y MILAGROSA',
      },
    ],
  },
  'http://icms-v2-0-pub.junta-andalucia.es/recursos/jda_buscador_bienes_inmuebles/10002': {
    'http://www.juntadeandalucia.es/2009/ods/provincia': [
      {
        type: 'literal',
        value: 'MÁLAGA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/naturaleza': [
      {
        type: 'literal',
        value: 'URBANA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/num_inventario': [
      {
        type: 'literal',
        value: '2000004371',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/calle': [
      {
        type: 'literal',
        value: 'ANTONIO MILLON (ANTIGUA FABRICA DE LARIOS, S/N)',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nid': [
      {
        type: 'literal',
        value: '10002',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/municipio': [
      {
        type: 'literal',
        value: 'NERJA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/uso_actual': [
      {
        type: 'literal',
        value: 'DOCENTE',
      },
    ],
    'http://purl.org/dc/elements/1.1/modified': [
      {
        type: 'literal',
        value: '<![CDATA[2020-06-08T12:14:24.000Z]]>',
        datatype: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/consejeria_agencia': [
      {
        type: 'literal',
        value: 'CONSEJERÍA DE EDUCACIÓN Y DEPORTE',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nombre_activo': [
      {
        type: 'literal',
        value: 'IES EL CHAPARIL',
      },
    ],
  },
  'http://icms-v2-0-pub.junta-andalucia.es/recursos/jda_buscador_bienes_inmuebles/10007': {
    'http://www.juntadeandalucia.es/2009/ods/provincia': [
      {
        type: 'literal',
        value: 'MÁLAGA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/naturaleza': [
      {
        type: 'literal',
        value: 'URBANA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/num_inventario': [
      {
        type: 'literal',
        value: '2000004395',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/calle': [
      {
        type: 'literal',
        value: 'GIBRALMORA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nid': [
      {
        type: 'literal',
        value: '10007',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/uso_actual': [
      {
        type: 'literal',
        value: 'DEPORTIVO',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/municipio': [
      {
        type: 'literal',
        value: 'PIZARRA',
      },
    ],
    'http://purl.org/dc/elements/1.1/modified': [
      {
        type: 'literal',
        value: '<![CDATA[2020-06-08T12:14:24.000Z]]>',
        datatype: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/consejeria_agencia': [
      {
        type: 'literal',
        value: 'CONSEJERÍA DE EDUCACIÓN Y DEPORTE',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nombre_activo': [
      {
        type: 'literal',
        value: 'USO ASISTENCIAL (RESIDENCIAS)',
      },
    ],
  },
  'http://icms-v2-0-pub.junta-andalucia.es/recursos/jda_buscador_bienes_inmuebles/10005': {
    'http://www.juntadeandalucia.es/2009/ods/provincia': [
      {
        type: 'literal',
        value: 'MÁLAGA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/num_inventario': [
      {
        type: 'literal',
        value: '2000004387',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/naturaleza': [
      {
        type: 'literal',
        value: 'URBANA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/calle': [
      {
        type: 'literal',
        value: 'JOAQUIN BLAKE, 15 (O CALVARIO, S/N)',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nid': [
      {
        type: 'literal',
        value: '10005',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/municipio': [
      {
        type: 'literal',
        value: 'TORREMOLINOS',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/uso_actual': [
      {
        type: 'literal',
        value: 'DOCENTE',
      },
    ],
    'http://purl.org/dc/elements/1.1/modified': [
      {
        type: 'literal',
        value: '<![CDATA[2020-06-08T12:14:24.000Z]]>',
        datatype: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/consejeria_agencia': [
      {
        type: 'literal',
        value: 'CONSEJERÍA DE EDUCACIÓN Y DEPORTE',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nombre_activo': [
      {
        type: 'literal',
        value: 'NTRA. SRA. DEL CARMEN',
      },
    ],
  },
  'http://icms-v2-0-pub.junta-andalucia.es/recursos/jda_buscador_bienes_inmuebles/10003': {
    'http://www.juntadeandalucia.es/2009/ods/provincia': [
      {
        type: 'literal',
        value: 'MÁLAGA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/num_inventario': [
      {
        type: 'literal',
        value: '2000004372',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/naturaleza': [
      {
        type: 'literal',
        value: 'URBANA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/calle': [
      {
        type: 'literal',
        value: 'AVDA. DOLORES IBARRURI (FUERTE, S/N. EL)',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nid': [
      {
        type: 'literal',
        value: '10003',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/municipio': [
      {
        type: 'literal',
        value: 'RONDA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/uso_actual': [
      {
        type: 'literal',
        value: 'DOCENTE',
      },
    ],
    'http://purl.org/dc/elements/1.1/modified': [
      {
        type: 'literal',
        value: '<![CDATA[2020-06-08T12:14:24.000Z]]>',
        datatype: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/consejeria_agencia': [
      {
        type: 'literal',
        value: 'CONSEJERÍA DE EDUCACIÓN Y DEPORTE',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nombre_activo': [
      {
        type: 'literal',
        value: 'JUAN PEREZ DE GUZMAN',
      },
    ],
  },
  'http://icms-v2-0-pub.junta-andalucia.es/recursos/jda_buscador_bienes_inmuebles/10008': {
    'http://www.juntadeandalucia.es/2009/ods/provincia': [
      {
        type: 'literal',
        value: 'MÁLAGA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/naturaleza': [
      {
        type: 'literal',
        value: 'URBANA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/num_inventario': [
      {
        type: 'literal',
        value: '2000004412',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/calle': [
      {
        type: 'literal',
        value: 'OLIAS',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nid': [
      {
        type: 'literal',
        value: '10008',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/uso_actual': [
      {
        type: 'literal',
        value: 'DOCENTE',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/municipio': [
      {
        type: 'literal',
        value: 'MALAGA',
      },
    ],
    'http://purl.org/dc/elements/1.1/modified': [
      {
        type: 'literal',
        value: '<![CDATA[2020-06-08T12:14:24.000Z]]>',
        datatype: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/consejeria_agencia': [
      {
        type: 'literal',
        value: 'CONSEJERÍA DE EDUCACIÓN Y DEPORTE',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nombre_activo': [
      {
        type: 'literal',
        value: 'SAN JOSE',
      },
    ],
  },
  'http://icms-v2-0-pub.junta-andalucia.es/recursos/jda_buscador_bienes_inmuebles/10001': {
    'http://www.juntadeandalucia.es/2009/ods/provincia': [
      {
        type: 'literal',
        value: 'MÁLAGA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/num_inventario': [
      {
        type: 'literal',
        value: '2000004369',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/naturaleza': [
      {
        type: 'literal',
        value: 'URBANA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/calle': [
      {
        type: 'literal',
        value: 'RAMON CASTILLA (AV.SANTO TOMAS DE AQUINO)',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nid': [
      {
        type: 'literal',
        value: '10001',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/municipio': [
      {
        type: 'literal',
        value: 'ESTEPONA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/uso_actual': [
      {
        type: 'literal',
        value: 'DEPORTIVO',
      },
    ],
    'http://purl.org/dc/elements/1.1/modified': [
      {
        type: 'literal',
        value: '<![CDATA[2020-06-08T12:14:24.000Z]]>',
        datatype: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/consejeria_agencia': [
      {
        type: 'literal',
        value: 'CONSEJERÍA DE EDUCACIÓN Y DEPORTE',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nombre_activo': [
      {
        type: 'literal',
        value: 'CAMPO DE DEPORTES SAN FERNANDO',
      },
    ],
  },
  'http://icms-v2-0-pub.junta-andalucia.es/recursos/jda_buscador_bienes_inmuebles/10006': {
    'http://www.juntadeandalucia.es/2009/ods/provincia': [
      {
        type: 'literal',
        value: 'MÁLAGA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/naturaleza': [
      {
        type: 'literal',
        value: 'URBANA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/num_inventario': [
      {
        type: 'literal',
        value: '2000004394',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/calle': [
      {
        type: 'literal',
        value: 'CINCO DE NOVIEMBRE',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nid': [
      {
        type: 'literal',
        value: '10006',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/municipio': [
      {
        type: 'literal',
        value: 'PIZARRA',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/uso_actual': [
      {
        type: 'literal',
        value: 'DOCENTE',
      },
    ],
    'http://purl.org/dc/elements/1.1/modified': [
      {
        type: 'literal',
        value: '<![CDATA[2020-06-08T12:14:24.000Z]]>',
        datatype: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/consejeria_agencia': [
      {
        type: 'literal',
        value: 'CONSEJERÍA DE EDUCACIÓN Y DEPORTE',
      },
    ],
    'http://www.juntadeandalucia.es/2009/ods/nombre_activo': [
      {
        type: 'literal',
        value: 'C.E.I.P. NUESTRA SEÑORA DE LA FUENSANTA',
      },
    ],
  },
});
//#endregion
