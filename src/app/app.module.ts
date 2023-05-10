import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OptionWidgetComponent } from './option-widget/option-widget.component';
import { ProbabilityWidgetComponent } from './probability-widget/probability-widget.component';
import { ProbabilityChartWidgetComponent } from './probability-chart-widget/probability-chart-widget.component';
import { FutureAssuranceWidgetComponent } from './future-assurance-widget/future-assurance-widget.component';
import { OtherAssuranceComponent } from './other-assurance/other-assurance.component';
import {ChartModule} from 'angular-highcharts';
import { ClientComponent } from './client/client.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LeftBarComponent,
    OptionWidgetComponent,
    ProbabilityWidgetComponent,
    ProbabilityChartWidgetComponent,
    FutureAssuranceWidgetComponent,
    OtherAssuranceComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
