import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newConfirmed = 0;
  totalConfirmed = 0;
  newDeaths = 0;
  totalDeaths = 0;
  newRecovered = 0;
  totalRecovered = 0;

  // Using data service - Uses resolver
  constructor(private activatedRoute: ActivatedRoute) { }

  overviewData: any[];
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((obj: { dataFromResolve: any }) => {
      this.newConfirmed = obj.dataFromResolve.Global.NewConfirmed;
      this.totalConfirmed = obj.dataFromResolve.Global.TotalConfirmed;
      this.newDeaths = obj.dataFromResolve.Global.NewDeaths;
      this.totalDeaths = obj.dataFromResolve.Global.TotalDeaths;
      this.newRecovered = obj.dataFromResolve.Global.NewRecovered;
      this.totalRecovered = obj.dataFromResolve.Global.TotalRecovered;
    });
  }

  // Using modelService - Without data resolver. Initial loading not getting the data
  // constructor(public modelService: ModelService) { }

  // ngOnInit(): void {
  //   if (this.modelService.globalData != {}) {
  //     this.newConfirmed = this.modelService.globalData.NewConfirmed;
  //     this.totalConfirmed = this.modelService.globalData.TotalConfirmed;
  //     this.newDeaths = this.modelService.globalData.NewDeaths;
  //     this.totalDeaths = this.modelService.globalData.TotalDeaths;
  //     this.newRecovered = this.modelService.globalData.NewRecovered;
  //     this.totalRecovered = this.modelService.globalData.TotalRecovered;
  //   }
  // }

}
