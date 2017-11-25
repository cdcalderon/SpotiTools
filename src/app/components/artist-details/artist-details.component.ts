import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['id'])
      .subscribe(id => {
        this.spotifyService.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
            console.log(this.artist);

            this.spotifyService.getTopTracks(this.artist.id)
              .subscribe(topTracks => {
                console.log(topTracks);
                 this.topTracks = topTracks;
              });

          });
      });
  }

}
