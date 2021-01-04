import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * This service get data from the Open Data sections by Malaga Town Hall
 */
@Injectable({
  providedIn: 'root',
})
export class MalagaOpenDataService {
  /**
   * The url of Malaga Town Hall Open Datda.
   */
  private urlBase = '/MA-OPENDATA';

  constructor(private httpClient: HttpClient) {}

  /**
   * This method return the parking info in CSVFormat.
   */
  public getParkingInfoCSV(): Observable<any> {
    const url = `${this.urlBase}/aparcamientos/ocupappublicosmun/ocupappublicosmun.csv`;
    return this.httpClient.get(url, { responseType: 'text' });
  }

  public getTrafficlights(): Observable<any> {
    const url = `${this.urlBase}/transporte/trafico/da_semaforosAcusticos-4326.geojson`;
    return this.httpClient.get(url);
  }
}
