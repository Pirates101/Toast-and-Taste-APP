import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Cheese, PostCheese } from '../models/cheese';
import { Observable } from 'rxjs';
import { ShowCheeseComponent } from '../components/show-cheese/show-cheese.component';
import { Favorite } from '../models/favorite';

@Injectable({
  providedIn: 'root'
})
export class TntService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = `${environment.apiDomain}/api/TNT`;

  getCheeses() {
    return this.httpClient.get<Cheese[]>(this.baseUrl)
  }

  getFavorites(){
    return this.httpClient.get<ShowCheeseComponent[]>(this.baseUrl)
  }

  updateCheese(updatedCheese: Cheese,id: number | null) {
    return this.httpClient.put(`${this.baseUrl}/${id}`, updatedCheese);
  }

  deleteCheese(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

  addCheese(newCheese: PostCheese) {
    return this.httpClient.post<Cheese>(this.baseUrl, newCheese);
  }

  getTicket(id: number): Observable<Cheese> {
    return this.httpClient.get<Cheese>(`${this.baseUrl}/${id}`);
  }

  postFavorite(newFav: Favorite): Observable<Favorite> {
    return this.httpClient.post<Favorite>(this.baseUrl, newFav);
  }
}
