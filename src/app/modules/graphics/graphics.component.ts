import { Component, OnDestroy, OnInit } from '@angular/core';
import { MalagaOpenDataService } from '@services/malaga-open-data.service';
import { csvToJson } from '@services/utils';
import { map, takeUntil } from 'rxjs/operators';
import { MODParking } from '@models/models';
import { Subject } from 'rxjs';

/**
 * Component to show the use of the Graph with PrimeNG.
 */
@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss'],
})
export class GraphicsComponent implements OnInit, OnDestroy {
  /**
   * Elements to show in a dashboard.
   */
  public items: MODParking[];

  /**
   * Options of the charts.
   */
  public options = {
    animation: { duration: 0 },
  };

  /**
   * Values to draw the Line Chart.
   */
  public dataset: any;

  /**
   * Indicator to show when is loading the data.
   */
  public isLoading = false;

  /**
   * Objet to unsubcribe the Observables subscriptions when destroy the component.
   */
  private unsubscribe$: Subject<boolean> = new Subject<boolean>();

  /**
   * @ignore
   * Array to show the line graphic.
   */
  private colors = [
    '#FF0000',
    '#CC0000',
    '#CCCC00',
    '#66CC00',
    '#00FF00',
    '#00CC00',
    '#00CCCC',
    '#0066CC',
    '#0000FF',
    '#0000CC',
  ];

  /**
   * The constructor method
   */
  constructor(private malagaOpenData: MalagaOpenDataService) {}

  /**
   * @ignore
   * The init method.
   */
  ngOnInit(): void {
    this.loadData();
    // reload every minute
    setInterval(() => this.loadData(), 60000);
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
    this.malagaOpenData
      .getParkingInfoCSV()
      .pipe(
        takeUntil(this.unsubscribe$),
        map((data) => <MODParking[]>csvToJson(data))
      )
      .subscribe(
        (parkings: MODParking[]) => {
          this.items = this.processDataParkings(parkings);
          this.dataset = this.processDatasetParkings(this.items, this.dataset, this.colors);
        },
        (error) => {
          this.isLoading = false;
          console.error('--> Se ha producido un error al cargar los datos desde MalagaOpenData.');
        },
        () => (this.isLoading = false)
      );
  }

  private processDataParkings(parkings: MODParking[]): MODParking[] {
    return parkings
      .filter((parking) => parking.nombre && parking.libres > 0)
      .sort((a, b) => a.nombre.localeCompare(b.nombre))
      .map((parking) => {
        parking.data = <any>{
          datasets: [
            {
              data: [parking.capacidad - parking.libres, parking.libres],
              backgroundColor: ['#880000', '#008800'],
            },
          ],
        };
        return parking;
      });
  }

  private processDatasetParkings(parkings: MODParking[], dataset: any, colors: string[]): any {
    let result: any = {};
    if (!dataset) {
      result.datasets = [];
      let color = 0;
      parkings.forEach((parking: MODParking) => {
        result.datasets.push({
          label: parking.nombre,
          data: [this.calculateOccupacy(parking)],
          fill: false,
          borderColor: colors[color],
        });
        color++;
      });
    } else {
      result.datasets = [...dataset.datasets];
      parkings.forEach((parking: MODParking) => {
        const datasetFinded = result.datasets.find((data) => parking.nombre === data.label);
        if (datasetFinded) {
          datasetFinded.data = [...datasetFinded.data, this.calculateOccupacy(parking)];
        }
      });
    }
    return result;
  }

  private calculateOccupacy(parking: MODParking): number {
    return Math.trunc(((parking.capacidad - parking.libres) / parking.capacidad) * 100);
  }
}
