import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[] = [];
  urlSpotifyBase = 'https://api.spotify.com/v1/';
  token = 'BQDSGgXCZ6HWp0p2R7HVYuYed6KZ0X48bgwRx5SuF9hkL7exDfb5YMFQCjMXDU3UGOqnvGkTqUU-LLM8fZMxHw';
  constructor(private http: HttpClient) { }

  getArtists(term: string) {
    const url = `${this.urlSpotifyBase}search?query=${term}&type=artist&offset=0&limit=20`;

    const headers = this.getHeaders();

    return this.http.get(url, {headers})
      .map((resp: any) => this.artists = resp.artists.items);

  }

  getArtist(id: string) {
    const url = `${this.urlSpotifyBase}artists/${id}`;

    const headers = this.getHeaders();

    return this.http.get(url, {headers});
  }

  getTopTracks(id: string) {
    const url = `${this.urlSpotifyBase}artists/${id}/top-tracks?country=US`;

    const headers = this.getHeaders();

    return this.http.get(url, {headers})
      .map((resp: any) => resp.tracks);
  }

  private getHeaders(): HttpHeaders {
    return  new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });
  }

}
