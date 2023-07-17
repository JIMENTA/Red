import { Component } from '@angular/core';
import { LngLat, Marker, Map } from 'mapbox-gl';

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
export class AddMarkerComponent {

  public map ?: Map;

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
        'Material 1',
        'Material 2',
        'Material 3',
      ]
    }
  ]

  iniciativa: Iniciativa[] = []

  // addMarker(lngLat: LngLat){
  //   if(!this.map)return;
  //   const marker = new Marker({ color: 'red',  draggable:true})
  //   .setLngLat( lngLat) 
  //   .setPopup(
  //   new mapboxgl.Popup() 
  //     .setHTML(
  //       `<h4>${ Marker.name}</h4><p>esta descripcion</p>`) //*todo: refactorizar
  //     )
  //   .addTo(this.map)
  //   this.markers.push({color: 'red',marker})
  //   this.saveToLocalStorage()

  //   marker.on('dragend', () => this.saveToLocalStorage())
  // }
}
