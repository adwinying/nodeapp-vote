import { Component, Input, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { Poll } from '../../classes/poll';
import Chart from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
	@Input() pollData: Poll;
	pollLabel: string[] = [];
	pollValues: number[] = [];
	pollChart: Chart;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  	this.compileChart();
  }

  compileChart() {
  	let ctx = document.getElementById('poll-chart');
  	this.pollLabel = [];
  	this.pollValues = [];
  	this.pollData.opts.forEach((opt) => {
  		this.pollLabel.push(opt.name);
  		this.pollValues.push(opt.count);
  	});

	  this.pollChart = new Chart(ctx, {
	  	type: 'horizontalBar',
    data: {
	    labels: this.pollLabel,
      datasets: [{
				label: '# of votes',
				backgroundColor: [
		      'rgba(255, 99, 132, 0.2)',
		      'rgba(54, 162, 235, 0.2)',
		      'rgba(255, 206, 86, 0.2)',
		      'rgba(75, 192, 192, 0.2)',
		      'rgba(153, 102, 255, 0.2)',
		      'rgba(255, 159, 64, 0.2)',
		      'rgba(255, 99, 132, 0.2)',
		      'rgba(54, 162, 235, 0.2)',
		      'rgba(255, 206, 86, 0.2)',
		      'rgba(75, 192, 192, 0.2)',
		      'rgba(153, 102, 255, 0.2)',
		      'rgba(255, 159, 64, 0.2)',
		      'rgba(255, 99, 132, 0.2)',
		      'rgba(54, 162, 235, 0.2)',
		      'rgba(255, 206, 86, 0.2)',
		      'rgba(75, 192, 192, 0.2)',
		      'rgba(153, 102, 255, 0.2)',
		      'rgba(255, 159, 64, 0.2)'
	      ],
	    	data: this.pollValues
	    }]
    },
    options: {
	    responsive: true,
	    maintainAspectRatio: true,
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      }
    }
	  });
  }

}
