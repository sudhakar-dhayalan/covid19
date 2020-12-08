import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReportOverviewComponent } from './report-overview/report-overview.component';
import { DataResolverService } from './services/data-resolver.service';
import { VictimsInsightComponent } from './victims-insight/victims-insight.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      dataFromResolve: DataResolverService
    }
  },
  { 
    path: 'reportOverview', 
    component: ReportOverviewComponent,
    resolve: {
      dataFromResolve: DataResolverService
    } 
  },
  { path: 'victimsInsight', component: VictimsInsightComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  PageNotFoundComponent,
  ReportOverviewComponent,
  VictimsInsightComponent
];