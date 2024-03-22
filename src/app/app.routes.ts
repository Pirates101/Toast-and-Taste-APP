import { Routes } from '@angular/router';
import { ShowCheeseComponent } from './components/show-cheese/show-cheese.component';
import { ShowWineDescriptionComponent } from './components/show-wine-description/show-wine-description.component';
import { ShowWineRecommendationComponent } from './components/show-wine-recommendation/show-wine-recommendation.component';

export const routes: Routes = [
    {
        path: 'cheeses',
        component: ShowCheeseComponent
    },
    {
        path: 'wineDescription',
        component: ShowWineDescriptionComponent
    },
    {
        path: 'wineRecommendation',
        component: ShowWineRecommendationComponent
    }
];
