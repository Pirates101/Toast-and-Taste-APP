import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpoonacularService } from '../../services/spoonacular.service';
import { FormsModule } from '@angular/forms';
import { WineDesription } from '../../models/wine-desription';

@Component({
  selector: 'app-show-wine-description',
  standalone: true,
  imports: [CommonModule, HttpClientModule,FormsModule],
  templateUrl: './show-wine-description.component.html',
  styleUrl: './show-wine-description.component.css'
})
export class ShowWineDescriptionComponent {
  constructor(private spoonacularService: SpoonacularService) {}
  
  wineQuery: string = '';
  

  handleSubmit() {
    
    this.wineDescription = this.spoonacularService.getWineDescription(this.wineQuery);
  }
  wineDescription = this.spoonacularService.getWineDescription(this.wineQuery);
  

  

}
