import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  globalData: any = {};
  countryData: any = {};
  IndiaData: any = {};
  allCountriesData: any = [];

  constructor(public http: HttpClient) {
    this.http.get('https://api.covid19api.com/summary').subscribe((value: any) => {
      this.globalData = value.Global;
      this.countryData = value.Countries;
      this.allCountriesData = value.Countries;

      this.countryData.forEach(countryList => {
        if (countryList.CountryCode == 'IN') {
          this.IndiaData = countryList;
          console.log(countryList);
        }
      });

    });
  }



  getOverviewData() {
    return this.globalData;
  }

}
