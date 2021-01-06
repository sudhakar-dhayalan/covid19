import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.css']
})
export class ReportOverviewComponent implements OnInit {

  @Input('tempHolder') data;

  public defaultColDef: object;

  columnDefs = [
    { field: 'Country' },
    { field: 'TotalConfirmed' },
    { field: 'NewConfirmed' },
    { field: 'TotalDeaths' },
    { field: 'NewDeaths' }
  ];

  rowData: any[] = [];

  constructor() {
    this.defaultColDef = {
      flex: 1,
      resizable: true
    };
  }

  countries: any[];
  ngOnInit(): void {
    this.countries = this.data.Countries;
    const tempRowData = [];

    this.countries.forEach(function(objOfArray: Object) {
      tempRowData.push(objOfArray);
    });

    this.rowData = tempRowData;
  }

}
