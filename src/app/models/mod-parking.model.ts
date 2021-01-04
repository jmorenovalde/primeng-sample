/**
 * Model of the Parking from Malala Open Data (MOD).
 */
export interface MODParking {
  /**
   * Parking altitude.
   */
  altitud?: number;
  /**
   * Capacity of parking spaces.
   */
  capacidad?: number;
  /**
   * capacity of disabled parking spaces.
   */
  capacidad_discapacitados?: number;
  /**
   * Email of the parking.
   */
  correoelectronico?: string;
  /**
   * Address.
   */
  direccion?: string;
  /**
   * Last update.
   */
  fechahora_ultima_actualizacion?: Date;
  /**
   * Latidude of the parging.
   */
  latitude?: number;
  /**
   * Number of parking spaces free.
   */
  libres?: number;
  /**
   * Number of disabled parking spaces free.
   */
  libres_discapacitados?: number;
  /**
   * Longitude of the parking
   */
  longitude?: number;
  /**
   * Orange occupancy level
   */
  nivelocupacion_naranja?: number;
  /**
   * Red occupancy level
   */
  nivelocupacion_rojo?: number;
  /**
   * Name of the parking
   */
  nombre?: string;
  /**
   * ID of the parking
   */
  poiID?: string;
  /**
   * A data of Malaga Town Hall.
   */
  smassa_sector_sare?: string;
  /**
   * Phone number of the parking.
   */
  telefono?: string;
  /**
   * To show the graphic in the app for the occupacy.
   */
  data?: any;
}
