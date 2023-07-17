import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './main/home/home.component';
import { MapModule } from './map/map.module';
import { SharedModule } from './shared/shared.module';
import { SliderComponent } from './main/slider/slider.component';
import { AccionesComponent } from './main/acciones/acciones.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    AccionesComponent,
 
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MapModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
