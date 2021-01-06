import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { ReportHolderComponent } from './report-holder/report-holder.component';

const reportRoute: Routes = [
    {
        path: '', children: [
            { path: '', component: ReportHolderComponent },
            { path: 'detail', component: ReportDetailComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(reportRoute)]
})
export class ReportRoutingModule { }
