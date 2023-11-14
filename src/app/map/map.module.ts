import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiamltZW50YSIsImEiOiJjbGh6M3p2NzAwMjRhM251bmN5c2I1bnRnIn0.PYkMcwFOwySMy2_LrKUllw';


import { MarkersMapComponent } from './pages/markers-map/markers-map.component';
import { MarkerDetailComponent } from './components/marker-detail/marker-detail.component';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { SharedModule } from '../shared/shared.module';
import { BySearchComponent } from './pages/by-search/by-search.component';
import { RouterModule } from '@angular/router';
import { FullInfoComponent } from './pages/full-info/full-info.component';
import { MapRoutingModule } from './map-routing.module';
import { AddMarkerComponent } from './components/add-marker/add-marker.component';


@NgModule({
  declarations: [
    MarkersMapComponent,
    MarkerDetailComponent,
    MiniMapaComponent,
    BySearchComponent,
    FullInfoComponent,
    AddMarkerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MapRoutingModule,
    SharedModule,
    RouterModule
  ], 
  exports:[
    MarkerDetailComponent,
    MarkersMapComponent,
    MiniMapaComponent,
  ]
})
export class MapModule { }
