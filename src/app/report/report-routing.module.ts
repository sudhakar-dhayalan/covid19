import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { ReportHolderComponent } from "./report-holder/report-holder.component";

const reportRoute: Routes = [
    { path: '', component: ReportHolderComponent },
    { path: 'reportDetail', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forChild(reportRoute)]
})
export class ReportRoutingModule { }