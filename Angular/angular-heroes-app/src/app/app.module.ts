import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HeroesComponent }     from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

import { HeroService } from './services/hero.service';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    HeroService,
    MessageService,
    InMemoryDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
