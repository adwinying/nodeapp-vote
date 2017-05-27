import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AllPollsComponent } from './components/all-polls/all-polls.component';

export const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'all',
		component: AllPollsComponent
	}
]
