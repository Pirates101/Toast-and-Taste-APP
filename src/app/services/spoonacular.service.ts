import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WineDesription } from '../models/wine-desription';
import { WineRecommendation, WineRecommendationResponse } from '../models/wine-recommendation';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {

  constructor(private httpClient: HttpClient) { }

  

  private baseUrl = 'https://api.spoonacular.com/food/wine';

  getWineDescription(wineQuery: string): Observable<WineDesription> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  let httpHeaders = new HttpHeaders()

  httpHeaders = httpHeaders.set('x-api-key', 'f2551da4c5434cc4bf924c531e035982');


    return this.httpClient.get<WineDesription>(`${this.baseUrl}/description?wine=${wineQuery}`, {
      headers: httpHeaders,
      observe: 'body',
      responseType: 'json',
    });
  }

  getWineRecommendation(wineQuery: string): Observable<WineRecommendationResponse> {

    
  let httpHeaders = new HttpHeaders()

  httpHeaders = httpHeaders.set('x-api-key', 'f2551da4c5434cc4bf924c531e035982');


    return this.httpClient.get<WineRecommendationResponse>(`${this.baseUrl}/recommendation?wine=${wineQuery}&number=2`, {
      headers: httpHeaders,
      observe: 'body',
      responseType: 'json',
    });
  }
}
