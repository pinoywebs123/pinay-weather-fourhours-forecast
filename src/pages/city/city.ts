import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@IonicPage()
@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class CityPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public WeatherProv: WeatherProvider) {
  }

  ionViewDidLoad() {
    this.WeatherProv.getWeather().subscribe(data => {
      console.log(this.data = data);
    })
  }

}
