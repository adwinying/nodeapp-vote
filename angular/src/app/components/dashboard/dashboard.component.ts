import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { Poll } from '../../classes/poll';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	userPolls: Poll[];
	isAjaxComplete: boolean;

  constructor(
  	private pollService: PollService,
  	private flashMessage: FlashMessagesService
	) { }

  ngOnInit() {
  	this.pollService.fetchUserPolls().subscribe(data => {
  		this.isAjaxComplete = true;
  		console.log(data);
			if (data.success) {
				this.userPolls = data.polls;
			} else {
				this.flashMessage.show(
					'An error occured. Please try again later',
					{cssClass: 'alert-danger'}
				);
				console.error(data.message);
			}
  	})
  }

}
