import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { ReportOverviewComponent } from "./report-overview/report-overview.component";

const reportRoute: Routes = [
    { path: '', component: ReportOverviewComponent },
    { path: '/reportDetail', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forChild(reportRoute)]
})
export class ReportRoutingModule { }