import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CoreService {

  constructor(private http :Http) { }

  getImageOfTheDay() {
    return this
      .http.get('someuri') 
      .map(res => res.json());

  }

}
