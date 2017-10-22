import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

import { CityPage } from '../city/city';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any;
  aw: any;
  city = "Dumaguete, Negros Oriental";
  search: any;
  constructor(public navCtrl: NavController, public WeatherProv: WeatherProvider) {
    
  }

  ionViewDidLoad(){
    this.WeatherProv.getWeather().subscribe(data => {
      console.log(this.data = data);
      for(let aw of this.data){
        if(aw.location == this.city){
          this.aw = aw;
        }
      }

    });
  }

  searchCity(){
    if(this.search == null || this.search == ""){
      this.WeatherProv.getWeather().subscribe(data => {
        console.log(this.data = data);
        for(let aw of this.data){
          if(aw.location == this.city){
            console.log(this.aw = aw);
          }
        }
  
      });
    }else{
      this.city = this.search;
      this.WeatherProv.getWeather().subscribe(data => {
        this.data = data;
        for(let aw of this.data){
          if(aw.location == this.search){
            console.log(this.aw = aw);
          }
        }
  
      });

    }
    
  }

  clickCity(){
    this.navCtrl.push(CityPage);
  }

  clickAbout(){
    this.navCtrl.push(AboutPage);
  }

  clickContact(){
    this.navCtrl.push(ContactPage);
  }

}
