import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherProvider {

  url: any;
  constructor(public http: Http) {
    this.url = "http://localhost:8100/api/four_hour_forecast";
  }

  getWeather(){
    return this.http.get(this.url).map(res => res.json());

  }

}
