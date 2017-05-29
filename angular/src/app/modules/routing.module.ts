import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { AllPollsComponent } from '../components/all-polls/all-polls.component';
import { NewPollComponent } from '../components/new-poll/new-poll.component';
import { PollDetailComponent } from '../components/poll-detail/poll-detail.component';
import { AuthGuard } from '../guards/auth.guard';

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
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'poll/new',
		component: NewPollComponent,
		canActivate: [AuthGuard]
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