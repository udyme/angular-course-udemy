import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  loading = true;
  artista: any = {};
  topTracks = [];
  error = false;
  errorMessage: string;
  constructor(private aRoute: ActivatedRoute, private spotify: SpotifyService) {
    this.aRoute.params.subscribe(params => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }
  showError(msg) {
    this.error = true;
    this.errorMessage = msg;
    this.loading=false;
  }
  getArtista(id: string) {
    this.spotify.getArtista(id)
      .subscribe(data => {
        this.loading = false;
        console.log("artista=%o", data);
        this.artista = data;
      });
  }

  getTopTracks(id) {
    this.spotify.getTopTracks(id)
      .subscribe((data: any) => {
        // this.loading = false;
        this.topTracks = data;
        console.log("tracks=%o", this.topTracks);
      }, (error1) => {
        this.showError(error1.error.error.message);
      });
  }
}
