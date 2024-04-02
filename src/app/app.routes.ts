import { Routes } from '@angular/router';
import { ShowCheeseComponent } from './components/show-cheese/show-cheese.component';

import { ShowWineDescriptionComponent } from './components/show-wine-description/show-wine-description.component';
import { ShowWineRecommendationComponent } from './components/show-wine-recommendation/show-wine-recommendation.component';

import { UserLoggingComponent } from './components/user-logging/user-logging.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserPasswordComponent } from './components/user-password/user-password.component';
import { UserCombinationsComponent } from './user-combinations/user-combinations.component';


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
    },
	{
		path: 'favorites',
		component:FavoritesComponent
	},
    {
		path: 'userlogging',
		component: UserLoggingComponent
	},
	{
		path: 'userform',
		component: UserFormComponent
	},
	{
		path: 'usercombinations',
		component: UserCombinationsComponent
	},
    {
		path: 'userform/:username',
		component: UserFormComponent
	},
	{
		path: 'userpassword',
		component: UserPasswordComponent
	},
    {
		path: 'userlogoff',
		redirectTo: 'userlogging', 
		pathMatch: 'full'
	},
    {   path: '', 
	    redirectTo: 'userlogging', 
		pathMatch: 'full' 
	},
	{
		path: '**', 
		component: PageNotFoundComponent
	}



];
