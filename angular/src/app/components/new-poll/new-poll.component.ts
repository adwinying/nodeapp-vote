import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PollService } from '../../services/poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})
export class NewPollComponent implements OnInit {
	title: String;
	options: String;

  constructor(
  	private flashMessage: FlashMessagesService,
  	private pollService: PollService,
  	private router: Router
	) { }

  ngOnInit() {
  }

  onNewPollSubmit(event) {
  	const newPoll = {
  		title: this.title,
  		options: this.options
  	};

    event.preventDefault();

  	this.pollService.postNewPoll(newPoll).subscribe(data => {
  		if (data.success) {
		  	this.flashMessage.show(
		  		'Poll Successfully Created.', 
		  		{cssClass: 'alert-success'}
		  	);

		  	this.router.navigate([`/poll/${data.poll._id}`]);
  		} else {
  			this.flashMessage.show(
  				'An error has occured. Please try again later.',
  				{cssClass: 'alert-danger'}
				);
				console.error(data.message);
  		}
  	});
  }

}
