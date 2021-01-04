import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * This service get data from the Open Data of the Juanta de Andalucía (Andalusia, Spain).
 * https://www.juntadeandalucia.es/datosabiertos/portal/dataset/inmuebles-propiedad-de-la-junta-de-andalucia
 */
@Injectable({
  providedIn: 'root',
})
export class JuntaAndaluciaOpenDataService {
  /**
   * The url of Junta de Andalucía Open Datda.
   */
  private urlBase = '/JDA-OPENDATA';
  // jda_buscador_bienes_inmuebles.json?items=10000&page=1&order=dc:modified+desc

  constructor(private httpClient: HttpClient) {}

  /**
   * This method return the parking info in CSVFormat.
   */
  public getProperties(items: number = 1000, page: number = 1): Observable<any> {
    const url = `${this.urlBase}jda_buscador_bienes_inmuebles.json?items=${items}&page=${page}&order=dc:modified+desc`;
    return this.httpClient.get<any>(url);
  }
}
