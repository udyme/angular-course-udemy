import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  error = false;
  loading = true;
  newReleases = [];
  errorMessage: string;
  constructor(private spotify: SpotifyService) {
    console.log("Obteniendo tarjetas");
      this.spotify.getNewReleases().subscribe((data: any) => {
        this.newReleases = data;
        this.loading = false;
      }, (error1) => {
        console.log(error1);
        this.error = true;
        this.loading = false;
        this.errorMessage = error1.error.error.message;
      });

  }

}
