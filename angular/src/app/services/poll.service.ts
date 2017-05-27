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

  fetchSinglePoll(id) {
    const apiURI = `${masterURI}/poll/${id}`;

    return this.http.get(apiURI)
      .map(res => res.json());
  }

  fetchRecentPolls() {
  	const apiURI = `${masterURI}/poll/recent`;

  	return this.http.get(apiURI)
  		.map(res => res.json());
  }

  fetchAllPolls() {
  	const apiURI = `${masterURI}/poll/all`;

  	return this.http.get(apiURI)
  		.map(res => res.json());
  }

  fetchUserPolls() {
    const apiURI = `${masterURI}/poll/userpolls`;

    return this.http.get(apiURI)
      .map(res => res.json());
  }

  postNewPoll(poll) {
    const apiURI = `${masterURI}/poll/new`;

    return this.http.post(apiURI, poll, {headers: this.headers})
      .map(res => res.json());
  }

  addNewOpt(pollId, newOpt) {
    const apiURI = `${masterURI}/poll/${pollId}`;

    return this.http.put(apiURI, {opt: newOpt}, {headers: this.headers})
      .map(res => res.json());
  }

  incVoteCount(pollId, currOptId) {
    const apiURI = `${masterURI}/poll/${pollId}`;

    return this.http.patch(apiURI, {_id: currOptId}, {headers: this.headers})
      .map(res => res.json());
  }
}
