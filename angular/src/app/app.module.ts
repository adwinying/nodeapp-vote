import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { PollService } from './services/poll.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PollListComponent } from './components/poll-list/poll-list.component';import { appRoutes } from './app.routes';
import { FooterComponent } from './components/footer/footer.component';
import { AllPollsComponent } from './components/all-polls/all-polls.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PollListComponent,
    FooterComponent,
    AllPollsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
