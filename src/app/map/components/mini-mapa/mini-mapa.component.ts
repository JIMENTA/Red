import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker} from 'mapbox-gl';


@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styleUrls: ['./mini-mapa.component.css']
})
export class MiniMapaComponent {

  @Input() lngLat?:[number, number]
  @ViewChild('map') divMap ?: ElementRef;

  ngAfterViewInit():void{
    if(!this.divMap?.nativeElement) throw 'No se ha encontrado el elemento HTML'
    if(!this.lngLat) throw 'LngLat NO puede ser null'

    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat,
      zoom:15, 
      interactive: false
  });
   new Marker()
   .setLngLat(this.lngLat)
   .addTo(map)

  }

}
