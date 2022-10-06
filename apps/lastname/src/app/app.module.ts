import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MovieSearchPageComponent } from './movie-search-page/movie-search-page.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HeaderComponent,
    MovieSearchPageComponent,
  ],
  imports: [BrowserModule, MatIconModule, RouterOutlet, RouterLink, RouterLinkActive],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
