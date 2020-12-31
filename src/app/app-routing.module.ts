import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReportOverviewComponent } from './report/report-overview/report-overview.component';
//import { ReportOverviewComponent } from './report-overview/report-overview.component';
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
  // { 
  //   path: 'reportOverview', 
  //   component: ReportOverviewComponent,
  //   resolve: {
  //     dataFromResolve: DataResolverService
  //   } 
  // },
  {
    path: 'report',
    loadChildren: () => import('src/app/report/report.module').then(m => m.ReportModule),
    resolve: {
      dataFromResolve: DataResolverService
    }
  },
  { path: 'victimsInsight', component: VictimsInsightComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appModuleComponents = [
  HomeComponent,
  PageNotFoundComponent,
  //ReportOverviewComponent,
  VictimsInsightComponent,
  AboutComponent
];