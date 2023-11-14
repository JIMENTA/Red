import { AfterViewInit, Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { LngLat, Marker, Map } from 'mapbox-gl';
import { MarkerColor, PlainMarker } from '../../interfaces/marker.interface';

interface Iniciativa {
  nombre: string,
  direccion: string,
  telefono?: string,
  descripcion: string,
  contacto?: string,
  comentarios?: string,
}

interface FormMaterial {
  nombre: string,
  material: string[]
}

@Component({
  selector: 'app-add-marker',
  templateUrl: './add-marker.component.html',
  styleUrls: ['./add-marker.component.css']
})
export class AddMarkerComponent implements AfterViewInit{
  public map ?: Map;
  public markers : MarkerColor[] = []

  ngAfterViewInit(): void {
    this.readFromLocalStorage();

  }

  formLabel: string[] =[
    'nombre',
    'direccion/ ubicacion',
    'telefono',
    'breve descripcion',
    'web/ email/ RRSS',
    'otros/ comentarios/ Sugerencias/ etc',
  ]

  material: FormMaterial[] = [
    {
      nombre: 'Tipo de Material',
      material: [
        'Organico',
        'Ropa',
        'Plastico',
        'Papel/Carton/Diario',
        'Vidrio',
        'Vajilla',
        'Electrodomesticos',
        'Herramientas'
      ]
    }
  ]

  iniciativa: Iniciativa[] = []

  createMarker(){
    if(!this.map)return;
    
    const lngLat = this.map.getCenter()
    
    this.addMarker(lngLat)
  }

  addMarker(lngLat: LngLat){
    if(!this.map)return;
    const marker = new Marker({ color: 'red',  draggable:true})
    .setLngLat( lngLat) 
    .setPopup(
    new mapboxgl.Popup() 
      .setHTML(
        `<h4>${ Marker.name}</h4><p>esta descripcion</p>`) //*todo: refactorizar
      )
    .addTo(this.map)
    this.markers.push({color: 'red',marker})
    this.saveToLocalStorage()

    marker.on('dragend', () => this.saveToLocalStorage())
  }


  saveToLocalStorage(){
    const plainMarkers : PlainMarker[] = this.markers.map(({color, marker}) =>{
      return{
        color, 
        lngLat : marker.getLngLat().toArray()
      }
    })
localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers))
  }

  readFromLocalStorage(){
    const plainMarkersStrig = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers : PlainMarker[] = JSON.parse(plainMarkersStrig)

    plainMarkers.forEach(({ lngLat}) => {
      const [ lng, lat] = lngLat
      const coords = new LngLat(lng, lat)

      this.addMarker(coords)
    });
  }
}
