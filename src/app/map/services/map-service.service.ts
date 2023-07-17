import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Point } from '../interfaces/marker.interface';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  private apiUrl: string = 'https://redapi-production.up.railway.app'
  
  constructor(private http: HttpClient) { }

  seeAllPoints() : Observable<Point[]>{
      const url = `${this.apiUrl}/api/points` 
      return this.http.get<Point[]>( url)
  }

  searchByName(term : string) : Observable<Point[]>{
    const url = `${this.apiUrl}/api/${term}` 
    return this.http.get<Point[]>( url)
}


}



    
