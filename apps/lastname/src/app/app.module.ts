import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HeaderComponent],
  imports: [BrowserModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
