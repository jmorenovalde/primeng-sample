import { Component, OnDestroy, OnInit } from '@angular/core';
import { JuntaAndaluciaOpenDataService } from '@services/junta-andalucia-open-data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { JDAProperty } from '@models/models';

/**
 * The sample of a list using PrimeNG Table.
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  /**
   * Items to show in the table.
   */
  public items: JDAProperty[] = [];

  /**
   * The fisrt index of the list
   */
  public first: number = 0;

  private ODS_PATH = 'http://www.juntadeandalucia.es/2009/ods/';
  private DATE_PATH = 'http://purl.org/dc/elements/1.1/modified';

  /**
   * This variable is to show if is loading the data.
   */
  public isLoading = false;

  /**
   * Objet to unsubcribe the Observables subscriptions when destroy the component.
   */
  private unsubscribe$: Subject<boolean> = new Subject<boolean>();

  /**
   * The constructor method
   * @constructor
   */
  constructor(private jdaOpenData: JuntaAndaluciaOpenDataService) {}

  /**
   * @ignore
   * The init method.
   */
  ngOnInit(): void {
    this.loadData();
  }

  /**
   * @ignore
   * Destroy the opened subcriptions.
   */
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  private loadData() {
    this.isLoading = true;
    this.jdaOpenData
      .getProperties(100, 1)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (properties: any[]) => {
          if (properties) {
            const items = Object.keys(properties);
            items.forEach((element) => {
              const item = properties[element];
              this.items.push(this.processItemProperty(item));
              this.isLoading = false;
            });
          }
        },
        (error: any) => (this.isLoading = false)
      );
  }

  private processItemProperty(item: any): JDAProperty {
    return {
      id: Number.parseInt(this.getItemElement(item, 'nid')),
      address: this.getItemElement(item, 'calle'),
      name: this.getItemElement(item, 'nombre_activo'),
      ministry: this.getItemElement(item, 'consejeria_agencia'),
      city: this.getItemElement(item, 'municipio'),
      inventary: Number.parseInt(this.getItemElement(item, 'num_inventario')),
      state: this.getItemElement(item, 'provincia'),
      type: this.getItemElement(item, 'naturaleza'),
      using: this.getItemElement(item, 'uso_actual'),
      modified: this.getItemModified(item),
    };
  }

  private getItemElement(item: any, element: string): string {
    if (item && item[`${this.ODS_PATH}${element}`] && item[`${this.ODS_PATH}${element}`].length > 0) {
      return item[`${this.ODS_PATH}${element}`][0]?.value;
    } else {
      if (element === 'nid' || element === 'num_inventario') {
        return '0';
      } else {
        return '';
      }
    }
  }

  private getItemModified(item: any): Date {
    if (item && item[this.DATE_PATH]?.length > 0) {
      const date = <string>item[this.DATE_PATH][0].value.replace('<![CDATA[', '').replace(']]>', '');
      return new Date(date);
    }
    return null;
  }
}
