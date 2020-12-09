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
    { field: 'TotalConfirmed' },
    { field: 'NewConfirmed' },
    { field: 'TotalDeaths' },
    { field: 'NewDeaths' }
  ];


  rowData: any[] = [
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

    this.countries.forEach(function (objOfArray: Object) {
      tempRowData.push(objOfArray);
    });

    this.rowData = tempRowData;
  }

}
