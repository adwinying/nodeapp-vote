import { Component, OnInit } from '@angular/core';
import { Poll } from '../../classes/poll';
import { PollService } from '../../services/poll.service';

@Component({
  selector: 'app-all-polls',
  templateUrl: './all-polls.component.html',
  styleUrls: ['./all-polls.component.css']
})
export class AllPollsComponent implements OnInit {
	allPolls: Poll[] = [];

  constructor(
  	private pollService: PollService
	) { }

  ngOnInit() {
  	this.pollService.fetchAllPolls().subscribe(data => {
  		if (data.success) {
  			this.allPolls = data.polls;
  		} else {
  			throw data.message;
  		}
  	})
  }

}
