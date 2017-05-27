import { Component, Input, OnInit } from '@angular/core';
import { Poll } from '../../classes/poll';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {
	@Input() polls: Poll[];

  constructor() { }

  ngOnInit() {
  }

}
