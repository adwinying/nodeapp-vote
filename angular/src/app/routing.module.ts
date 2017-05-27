import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AllPollsComponent } from './components/all-polls/all-polls.component';
import { NewPollComponent } from './components/new-poll/new-poll.component';
import { PollDetailComponent } from './components/poll-detail/poll-detail.component';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'all',
		component: AllPollsComponent
	},
	{
		path: 'poll/new',
		component: NewPollComponent
	},
	{
		path: 'poll/:id',
		component: PollDetailComponent
	}
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class RoutingModule {}