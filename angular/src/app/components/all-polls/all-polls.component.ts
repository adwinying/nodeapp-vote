import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Poll } from '../../classes/poll';
import { PollService } from '../../services/poll.service';

@Component({
  selector: 'app-all-polls',
  templateUrl: './all-polls.component.html',
  styleUrls: ['./all-polls.component.css']
})
export class AllPollsComponent implements OnInit {
	allPolls: Poll[] = [];
  isAjaxComplete: boolean = false;

  constructor(
  	private pollService: PollService,
    private title: Title
	) { }

  ngOnInit() {
    this.title.setTitle('All Polls - NodeVote');
  	this.pollService.fetchAllPolls().subscribe(data => {
      this.isAjaxComplete = true;
  		if (data.success) {
  			this.allPolls = data.polls;
  		} else {
  			throw data.message;
  		}
  	})
  }

}
