import { Point } from '../../interfaces/marker.interface';
import { MapService } from './../../services/map-service.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-by-search',
  templateUrl: './by-search.component.html',
  styleUrls: ['./by-search.component.css']
})
export class BySearchComponent {

  searchByName(term: string){
    console.log(term)
  }


  // public pointsSearched : Point[]=[];

  // constructor( private mapService : MapService){}

  // searchByName(term: string){
  //   this.mapService.searchByName(term)
  //   .subscribe( points =>{
  //     this.pointsSearched = points
  //   })
  // }

}
