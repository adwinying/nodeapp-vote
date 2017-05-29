import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { HttpModule, Http, RequestOptions } from '@angular/http';

export function authHttpServiceFactory(
  http: Http, 
  options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => JSON.parse(localStorage.getItem('idToken'))),
    globalHeaders: [{'Content-Type':'application/json'}]
  }), http, options);
}

export const JwtService = {
  provide: AuthHttp,
  useFactory: authHttpServiceFactory,
  deps: [Http, RequestOptions]
};