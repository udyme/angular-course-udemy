import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Spotify service listo");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    let token = localStorage.getItem("spotify-token"); //environment.spotifyToken;
    //test for throw invalid access token error
    //token="hola";
    const headers = new HttpHeaders({
      authorization: `Bearer ${token}`
    });
    return this.http.get(url, { headers });
  }
  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=20").pipe(map(data => {
      console.info("tarjetas obtenidas");
      console.log(data["albums"].items);
      return data["albums"].items;
    }));
  }

  getArtista(id) {
    return this.getQuery(`artists/${id}`).pipe(map(data => {
      return data;//data["artists"].items;
    }));
  }


  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ES`).pipe(map(data => {
      return data["tracks"];
    }));
  }

  getArtistas(termino) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(map(data => {
      return data["artists"].items;
    }));
  }

}