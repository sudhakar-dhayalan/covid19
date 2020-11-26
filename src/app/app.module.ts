import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReportOverviewComponent } from './report-overview/report-overview.component';
import { VictimsInsightComponent } from './victims-insight/victims-insight.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    PageNotFoundComponent,
    ReportOverviewComponent,
    VictimsInsightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
