import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportOverviewComponent } from './report-overview/report-overview.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReportRoutingModule } from './report-routing.module';
import { ReportHolderComponent } from './report-holder/report-holder.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';


@NgModule({
  declarations: [
    ReportOverviewComponent,
    ReportHolderComponent,
    ReportDetailComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    ReportOverviewComponent
  ]
})
export class ReportModule { }
