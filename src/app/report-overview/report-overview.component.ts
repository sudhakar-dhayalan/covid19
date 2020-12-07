import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.css']
})
export class ReportOverviewComponent implements OnInit {
  public defaultColDef: object;

  columnDefs = [
    { field: 'Country' },
    { field: 'Total Cases' },
    { field: 'New Cases' },
    { field: 'Total Deaths' },
    { field: 'New Deaths' }
  ];

  rowData = [
    { 'Country': 'Any contry', 'Total Cases': '567', 'New Cases': 35000, 'Total Deaths': 35000, 'New Deaths': 35000 }
  ];

  constructor() { 
    this.defaultColDef = {
      flex: 1,
      resizable: true
    };
  }

  ngOnInit(): void { }

}
