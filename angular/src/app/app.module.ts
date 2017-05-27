import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { PollService } from './services/poll.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PollListComponent } from './components/poll-list/poll-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllPollsComponent } from './components/all-polls/all-polls.component';
import { NewPollComponent } from './components/new-poll/new-poll.component';
import { PollComponent } from './components/poll/poll.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PollListComponent,
    FooterComponent,
    AllPollsComponent,
    NewPollComponent,
    PollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    FlashMessagesModule
  ],
  providers: [
    PollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
