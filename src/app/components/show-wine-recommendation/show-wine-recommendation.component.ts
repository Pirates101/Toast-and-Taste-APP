import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpoonacularService } from '../../services/spoonacular.service';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-show-wine-recommendation',
  standalone: true,
  imports: [CommonModule, HttpClientModule,FormsModule,RouterModule],
  templateUrl: './show-wine-recommendation.component.html',
  styleUrl: './show-wine-recommendation.component.css'
})
export class ShowWineRecommendationComponent {
  constructor(
    private spoonacularService: SpoonacularService,
    private router: Router) {}

  wineQuery: string = '';

  handleSubmit() {
    
    this.wineRecommendation$ = this.spoonacularService.getWineRecommendation(this.wineQuery);
  }
  wineRecommendation$ = this.spoonacularService.getWineRecommendation(this.wineQuery);

  routeToWineRecommendation(id: number) {
    this.router.navigate(['wine-recommendation', id]);
  }
}

