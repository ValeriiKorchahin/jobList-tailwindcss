import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JobListComponent } from './components/job-list/job-list.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes/routes";
import {HttpClientModule} from "@angular/common/http";
import { VacancyComponent } from './components/vacancy/vacancy.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { VacancyDetailsComponent } from './components/vacancy-details/vacancy-details.component';
import {GoogleMapsModule} from "@angular/google-maps";



@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    VacancyComponent,
    VacancyDetailsComponent
  ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      HttpClientModule,
      FontAwesomeModule,
      GoogleMapsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
