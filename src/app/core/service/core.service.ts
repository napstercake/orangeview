import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CoreService {

  constructor(private http :Http) { }

  getImageOfTheDay() {

    // Documentation
    // https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf

    let API_ROOT              : string = 'https://api.nasa.gov';
    let API_ENDPOINT_SEARCH   : string = '/search';
    let API_ENDPOINT_ASSET    : string = '/asset/{nasa_id}';
    let API_ENDPOINT_METADATA : string = '/metadata/{nasa_id}';
    let API_ENDPOINT_CAPTIOS  : string = '/captions/{nasa_id}';
    let url1: string = 'planetary/earth/assets?lon=100.75&lat=1.5&begin=2014-02-01&api_key=';
    let url2: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=';
    let key: string = 'sWo0Y0LRcaqYOwGSoKCQ7BlVXpc44Yx102FgHFNH';

    return this.http.get(url2 + key).map(
      (res) => res.json()
    );
      

  }

}
