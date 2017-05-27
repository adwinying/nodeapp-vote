import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { Poll } from '../../classes/poll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	recentPolls: Poll[] = [];
  isAjaxComplete: boolean = false;

  constructor(
    private pollService: PollService
  ) { }

  ngOnInit() {
  	this.pollService.fetchRecentPolls().subscribe(data => {
      this.isAjaxComplete = true;
  		if (data.success) {
  			this.recentPolls = data.polls;
  		} else {
        throw data.message;
      }
  	});
  }

}
