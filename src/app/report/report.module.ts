import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportOverviewComponent } from './report-overview/report-overview.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    ReportOverviewComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    ReportOverviewComponent
  ]
})
export class ReportModule { }
