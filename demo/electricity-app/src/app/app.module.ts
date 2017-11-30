import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { HttpModule } from '@angular/http';
import {MeterModule} from "./meter/meter.module";
import {TariffModule} from "./tariff/tariff.module";
import {ReadingModule} from "./reading/reading.module";
import {PeriodModule} from "./period/period.module";
import {RateModule} from "./rate/rate.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    HttpModule,
    MeterModule,
    TariffModule,
    ReadingModule,
    PeriodModule,
    RateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
