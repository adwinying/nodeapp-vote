import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

const masterURI = '//localhost:3000';

@Injectable()
export class AuthService {
	headers: Headers = new Headers();

  constructor(
  	private http: Http,
  ) {
  	this.headers.append('Content-Type', 'application/json');
  }

  //Returns JSON result
  loggedIn() {
  	const apiURI = `${masterURI}/auth/check`;

  	return this.http.get(apiURI).map(res => res.json());
  }

  //Returns true or false
  chkLoggedIn(callback) {
  	this.loggedIn().toPromise()
  		.then(data => {
  			console.log(data);
  			callback(data.success);
  		});
  }
}
