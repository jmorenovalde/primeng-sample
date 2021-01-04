import { Data } from '@angular/router';

export interface MODTrafficlight {
  geometry?: MODGeometry;
  geometry_name?: string;
  id?: string;
  properties?: MODFeatureProperties;
  type?: string;
}

export interface MODGeometry {
  coordinates?: Array<string>;
  type?: string;
}

export interface MODFeatureProperties {
  altitudemode?: number;
  begin?: Data;
  description?: string;
  draworder?: number;
  end?: Date;
  extrude?: number;
  icon?: string;
  name?: string;
  ogc_fid?: number;
  tessellate?: number;
  timestamp?: Date;
  visibility?: number;
}
