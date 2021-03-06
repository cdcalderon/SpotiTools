import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

// Routes
import {APP_ROUTING} from './app.routes';

// Services
import {SpotifyService} from './services/spotify.service';

// Pipes
import { NopicturePipe } from './pipes/nopicture.pipe';
import { SafeDomPipe } from './pipes/safe-dom.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    NopicturePipe,
    ArtistDetailsComponent,
    SafeDomPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
