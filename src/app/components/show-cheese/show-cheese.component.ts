import { Component } from '@angular/core';
import { TntService } from '../../services/tnt.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cheese } from '../../models/cheese';
import { Favorite } from '../../models/favorite';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-show-cheese',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './show-cheese.component.html',
  styleUrl: './show-cheese.component.css'
})
export class ShowCheeseComponent  {

  constructor(
    private tntService: TntService,
    private favoritesService: FavoritesService,
    private router: Router
  ) {}

  cheeses$ = this.tntService.getCheeses(); 
  favoritePairings$ = this.tntService.getFavorites(); 

 updateFavorites(id: number, cheese: Cheese) {
    this.router.navigate(['update-favorites', id], { queryParams: cheese });
  }

  deleteCheese(id: number) {
    this.tntService.deleteCheese(id).subscribe(() => {
      this.cheeses$ = this.tntService.getCheeses();
    })
  }
  
  routeToDetails(id: number) {
    this.router.navigate(['cheese', id]);    
  }

  favoritePairings(id: Favorite){
    console.log("favoritePairings",id);
    this.favoritesService.postFavorite(id).subscribe(() => {
      this.cheeses$ = this.tntService.getCheeses();
      this.favoritePairings$ = this.tntService.getFavorites();
    });
  }}

