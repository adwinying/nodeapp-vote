import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { PollService } from '../../services/poll.service';
import { Poll } from '../../classes/poll';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.css']
})
export class PollDetailComponent implements OnInit {
	pollId: number;
	poll: Poll;
	selectedOptId: number;
	newOptName: string;
	isAjaxComplete: boolean = false;
  isOwner: boolean = false;

  constructor(
  	private pollService: PollService,
    private authService: AuthService,
  	private route: ActivatedRoute,
  	private flashMessage: FlashMessagesService,
  	private router: Router,
    private title: Title
	) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.pollId = params['id'];

  		this.pollService.fetchSinglePoll(this.pollId).subscribe(data => {
  			this.isAjaxComplete = true;
  			if (data.success) {
					this.poll = data.poll;

          if (this.poll.ownerId === this.authService.getUserId()) {
            this.isOwner = true;
          }

          this.title.setTitle(`${this.poll.title} - NodeVote`);
  			}
  		})
  	});
  }

  onOptClick(opt) {
  	this.newOptName = "";
  	this.selectedOptId = opt._id;
  }

  onNewOptInput() {
  	this.selectedOptId = NaN;
  }

  onVoteSubmit() {
  	if (this.newOptName) {
      if (this.authService.authenticated()) {
    		this.pollService.addNewOpt(this.pollId, this.newOptName).subscribe(data => {
    			if (data.success) {
    				this.flashMessage.show(
    					'New poll option added successfully.',
    					{cssClass: 'alert-success'}
  					);
  					this.poll = data.poll;
  					this.newOptName = "";
    			} else {
    				this.flashMessage.show(
    					'An error has occurred. Please try again.',
    					{cssClass: 'alert-danger'}
  					);
            console.error(data.message);
    			}
    		});
      } else {
        this.flashMessage.show(
          'You need to be logged in to add a new option',
          {cssClass: 'alert-danger'}
        );
      }
  	} else if (this.selectedOptId) {
  		this.pollService.incVoteCount(this.pollId, this.selectedOptId).subscribe(data => {
  			if (data.success) {
  				this.flashMessage.show(
  					'Successfully voted.',
  					{cssClass: 'alert-success'}
					);
					this.poll = data.poll;
					this.selectedOptId = NaN;
  			} else {
  				this.flashMessage.show(
  					data.message,
  					{cssClass: 'alert-danger'}
					);
					console.error(data.message);
  			}
  		});
  	} else {
  		this.flashMessage.show(
  			'Please select an Option', 
  			{cssClass: 'alert-warning'}
			);
  	}
  }

  onDeleteClick() {
    this.pollService.delPoll(this.pollId).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(
          'Successfully deleted poll.',
          {cssClass: 'alert-success'}
        );
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
