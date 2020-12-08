import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.css']
})
export class ReportOverviewComponent implements OnInit {
  public defaultColDef: object;

  columnDefs = [
    { field: 'Country' },
    { field: 'NewConfirmed' },
    { field: 'NewConfirmed' },
    { field: 'Total test Deaths' },
    { field: 'New Deaths' }
  ];

  
  rowData: any[] = [
    {'Country': 'any country', 'NewConfirmed': '2', 'Total Deaths': '2', 'Deaths': '2', 'New Deaths': '2'}
  ];

 //Using data service - Uses resolver
 constructor(private activatedRoute: ActivatedRoute) { 
  this.defaultColDef = {
    flex: 1,
    resizable: true
  };
 }

 countries: any[];
 ngOnInit(): void {
   let tempRowData = [];
   this.activatedRoute.data.subscribe((obj: { dataFromResolve: any }) => {
     this.countries = obj.dataFromResolve.Countries;
   });

   this.countries.forEach(function (objOfArray:Object) {
    tempRowData.push(objOfArray);
   });

   this.rowData = tempRowData;
 }

}
