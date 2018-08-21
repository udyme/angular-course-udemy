import { Component } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  videos = [];
  videoSeleccionado: any = null;
  constructor(private youtube: YoutubeService) {
    this.getVideos();
  }

  //el api retorna un error 400 cuando algun parametro es invalido
  getVideos() {
    this.youtube.getVideos().subscribe(data => {
      this.videos.push(...data)
      console.log(data);
    }, error => {
      console.error(error);
    });
  }

  verVideo(video) {
    console.log("verVideo=%0", video);
    this.videoSeleccionado = video;
    $("#modal1").modal();
  }
  cerrarModal() {
    console.log("cerrarModal");
    this.videoSeleccionado = null;
    $("#modal1").modal('hide');
  }

  cargarMas() {
    this.getVideos();
  }
}
