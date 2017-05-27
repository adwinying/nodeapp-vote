import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const masterURI = '//localhost:3000';

@Injectable()
export class PollService {
	headers: Headers = new Headers();

  constructor(private http: Http) {
  	this.headers.append('Content-Type', 'application/json');
  }

  fetchRecentPolls() {
  	let apiURI = `${masterURI}/poll/recent`;

  	return this.http.get(apiURI, {headers: this.headers})
  		.map(res => res.json());
  }

  fetchAllPolls() {
  	let apiURI = `${masterURI}/poll/all`;

  	return this.http.get(apiURI, {headers: this.headers})
  		.map(res => res.json());
  }

  postNewPoll(poll) {
    let apiURI = `${masterURI}/poll/new`;

    return this.http.post(apiURI, poll, {headers: this.headers})
      .map(res => res.json());
  }

}
