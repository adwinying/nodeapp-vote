import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Ng2UiAuthModule, CustomConfig } from 'ng2-ui-auth';

import { PollService } from './services/poll.service';
import { AuthService } from './services/auth.service';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PollListComponent } from './components/poll-list/poll-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllPollsComponent } from './components/all-polls/all-polls.component';
import { NewPollComponent } from './components/new-poll/new-poll.component';
import { PollDetailComponent } from './components/poll-detail/poll-detail.component';

export class AuthConfig extends CustomConfig {
  defaultHeaders = {'Content-Type': 'application/json'};
  tokenName = 'accessToken';
  tokenPrefix = '';
  baseUrl = 'http://localhost:3000';
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PollListComponent,
    FooterComponent,
    AllPollsComponent,
    NewPollComponent,
    PollDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    FlashMessagesModule,
    Ng2UiAuthModule.forRoot(AuthConfig)
  ],
  providers: [
    PollService,
    AuthService,
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
