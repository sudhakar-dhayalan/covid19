import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';

import { AgGridModule } from 'ag-grid-angular';
import { PreventationComponent } from './preventation/preventation.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { ReportModule } from './report/report.module';

@NgModule({
  declarations: [
    AppComponent,
    PreventationComponent,
    NavbarComponent
  ],
  imports: [
    // ReportModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
