import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import Auth0Lock from 'auth0-lock';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
	headers: Headers = new Headers();
	lock = new Auth0Lock(
    'qIRywfrVutDW5bx4FmN5RywkfQLLw8Mk', 
    'adwin.auth0.com',
    {
      auth: {
        params: {
          scope: 'openid nickname'
        }
      }
    });

  constructor(
  	private http: Http,
  	private router: Router
  ) { 
	  this.lock.on("authenticated", (authResult) => {
      console.log(authResult);
	    localStorage.setItem("accessToken", authResult.accessToken);
	    localStorage.setItem("idToken", JSON.stringify(authResult.idToken));
      localStorage.setItem("userName", JSON.stringify(authResult.idTokenPayload.nickname));
      localStorage.setItem("userId", JSON.stringify(authResult.idTokenPayload.sub.replace('twitter|', '')));

      this.router.navigate(['/dashboard']);
		});
  }

  public login() {
  	this.lock.show();
  }

  public authenticated() {
  	return tokenNotExpired('idToken');
  }

  public logout() {
  	localStorage.removeItem('idToken');
  }

  getToken() {
    return JSON.parse(localStorage.getItem('idToken'));
  }

  getUserName() {
    return JSON.parse(localStorage.getItem('userName'));
  }

  getUserId() {
    return +JSON.parse(localStorage.getItem('userId'));
  }
}
