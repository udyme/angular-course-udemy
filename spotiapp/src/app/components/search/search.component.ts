import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  loading = false;
  artistas = [];
  errorMessage: string;
  error = false;
  showError(msg: string) {
    this.error = true;
    this.loading = false;
    this.errorMessage = msg;
  }
  constructor(private spotify: SpotifyService) { }
  buscar(termino) {
    if (!termino) {
      this.artistas = [];
      return false;
    }
    this.loading = true;
    this.error=false;
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
      console.log(this.artistas);
    }, (error1) => {
      this.showError(error1.error.error.message);
    });
  }
}
