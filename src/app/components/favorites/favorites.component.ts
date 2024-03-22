
import { FavoritesService } from '../../services/favorites.service';
import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';


  @Component({
    selector: 'app-favorites',
    standalone: true, 
    imports: [CommonModule],
    templateUrl: './favorites.component.html',
    styleUrl: './favorites.component.css'
  })


export class FavoritesComponent {
  
  constructor(
    private favoritesService: FavoritesService) { }

  favorites$ = this.favoritesService.getFavorites();
  
}