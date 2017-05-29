import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RoutingModule } from './modules/routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { PollService } from './services/poll.service';
import { AuthService } from './services/auth.service';
import { JwtService } from './services/jwt.service';
import { AuthGuard } from './guards/auth.guard';
import { Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PollListComponent } from './components/poll-list/poll-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllPollsComponent } from './components/all-polls/all-polls.component';
import { NewPollComponent } from './components/new-poll/new-poll.component';
import { PollDetailComponent } from './components/poll-detail/poll-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChartComponent } from './components/chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PollListComponent,
    FooterComponent,
    AllPollsComponent,
    NewPollComponent,
    PollDetailComponent,
    DashboardComponent,
    NotFoundComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    FlashMessagesModule
  ],
  providers: [
    PollService,
    AuthService,
    JwtService,
    AuthGuard,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
