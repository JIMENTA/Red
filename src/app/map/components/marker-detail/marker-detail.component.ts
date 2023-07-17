import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map-service.service';
import { Point } from '../../interfaces/marker.interface';


@Component({
  selector: 'app-marker-detail',
  templateUrl: './marker-detail.component.html',
  styleUrls: ['./marker-detail.component.css']
})
export class MarkerDetailComponent {
  //todo : DESDE LA API !
  public pointsInMap: Point[] =[
    {
        id: 1,
        name: 'Millor que nou',
        web:'http://www.millorquenou.cat/',
        description:'Talleres de reparacion, tienda de intecambio de segunda mano',
        adress:'Carrer Sepúlveda 47',
        lngLat: [2.154582334974559, 41.37749846831138 ],
        cat: ['electrodomesticos','bicicletas', 'otros']
    },
    {
        id: 2,
        name: 'Piel de mariposa',
        web:'https://www.pieldemariposa.es/nueva-tienda-solidaria-piel-de-mariposa-en-barcelona/',
        description:'Conscientes del desconsuelo, incertidumbre y desolación propios de estos primeros momentos, DEBRA Piel de Mariposa existe como única organización de apoyo, para mejorar el día a día de las familias a lo largo de todas las etapas de su vida.',
        adress:'Carrer del Torrent de l Olla 100',
        lngLat: [  2.158469524602895, 41.40154006700783],

        cat:['ropa']
    },
    {
        id: 3,
        name: 'Revendemos',
        web:'',
        description:'Tienda que compra, vende y recupera artículos de segunda mano en efectivo y depósito.',
        adress:'Compte Urgell 81',
        lngLat: [2.1565591484715374, 41.383365755350056],
        cat:['ropa']
    },
  ]
}
