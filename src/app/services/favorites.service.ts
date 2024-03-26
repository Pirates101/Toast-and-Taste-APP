import { Favorite, PostFavoriteModel } from "../models/favorite";
import { Injectable } from '@angular/core'
import { environment } from "../../environments/environment.development";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = `${environment.apiDomain}/api/Favorite`;

  addFavorite(favorite: PostFavoriteModel): Observable<Favorite> {
    return this.httpClient.post<Favorite>(this.baseUrl, favorite); 
  }

  getFavorites() {
    return this.httpClient.get<Favorite[]>(this.baseUrl);
  }

  deleteFavorite(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  postFavorite(newFav: Favorite): Observable<Favorite> {
    return this.httpClient.post<Favorite>(this.baseUrl, newFav);
  }
}
