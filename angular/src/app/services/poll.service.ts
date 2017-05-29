import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

const masterURI = '';

@Injectable()
export class PollService {
	headers: Headers = new Headers();

  constructor(
    private http: Http,
    private authHttp: AuthHttp
  ) {
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

    return this.authHttp.get(apiURI)
      .map(res => res.json());
  }

  postNewPoll(poll) {
    const apiURI = `${masterURI}/poll/new`;

    return this.authHttp.post(apiURI, poll)
      .map(res => res.json());
  }

  addNewOpt(pollId, newOpt) {
    const apiURI = `${masterURI}/poll/${pollId}`;

    return this.authHttp.put(apiURI, {opt: newOpt})
      .map(res => res.json());
  }

  incVoteCount(pollId, currOptId) {
    const apiURI = `${masterURI}/poll/${pollId}`;

    return this.http.patch(apiURI, {_id: currOptId}, {headers: this.headers})
      .map(res => res.json());
  }

  delPoll(pollId) {
    const apiURI = `${masterURI}/poll/${pollId}`;

    return this.authHttp.delete(apiURI)
      .map(res => res.json());
  }
}
