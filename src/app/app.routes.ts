import { Routes } from '@angular/router';
import { ShowCheeseComponent } from './components/show-cheese/show-cheese.component';
import { UserLoggingComponent } from './components/user-logging/user-logging.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserLogOffComponent } from './components/user-log-off/user-log-off.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'cheeses',
        component: ShowCheeseComponent
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
		path: 'userform/:username',
		component: UserFormComponent
	},
    {
		path: 'userlogoff',
		component: UserLogOffComponent
	},
    {   path: '', 
	    redirectTo: 'cheeses', 
		pathMatch: 'full' },
	{
		path: '**', 
		component: PageNotFoundComponent
	}

];
