
import { FavoritesService } from '../../services/favorites.service';
import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { TntService } from '../../services/tnt.service';
import { ShowCheeseComponent } from '../show-cheese/show-cheese.component';


  @Component({
    selector: 'app-favorites',
    standalone: true, 
    imports: [CommonModule],
    templateUrl: './favorites.component.html',
    styleUrl: './favorites.component.css'
  })


export class FavoritesComponent {
  
  constructor(
    private favoritesService: FavoritesService,
    private tntService: TntService) { }

  favorites$ = this.favoritesService.getFavorites();
  cheesePairings$ = this.tntService.getCheeses();
  
}