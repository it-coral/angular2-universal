import {Injectable} from '@angular/core';
@Injectable()
export class MapStyles {
  public getStyles(): any {
    return [{'stylers': [{'hue': '#65b0ea'}, {'saturation': 100}]}, {
      'featureType': 'water',
      'stylers': [{'color': '#f4f4f4'}]
    }, {
      'featureType': 'administrative.country',
      'elementType': 'labels', 'stylers': [{'visibility': 'off'}]}];
  }
}
