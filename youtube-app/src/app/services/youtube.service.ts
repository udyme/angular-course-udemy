import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = localStorage.getItem("youtube-api-key");
  private youtubeUrl = `https://www.googleapis.com/youtube/v3/`;
  private playList = "UUuaPTYj15JSkETGnEseaFFg";//Lista de uploads del canal de Fernando Herrera
  private requestHistory = [];
  private nextPageToken: string;
  constructor(private http: HttpClient) {
    console.log("Youtube service ready");
  }

  saveReqHistory(url) {
    if (localStorage.getItem("request-history")) {
      this.requestHistory = JSON.parse(localStorage.getItem("request-history"));
    }
    let d = new Date();
    let now = d.toLocaleString();
    this.requestHistory.push({ date: now, url });
    localStorage.setItem("request-history", JSON.stringify(this.requestHistory));

  }

  getVideos() {
    let url = `${this.youtubeUrl}playlistItems?part=snippet&maxResoults=10&playlistId=${this.playList}&key=${this.apiKey}`;
    if (this.nextPageToken) {
      url += `&pageToken=${this.nextPageToken}`;
    }
    this.saveReqHistory(url);
    return this.http.get(url).pipe(map(data => {
      this.nextPageToken = data["nextPageToken"];
      return data["items"].map(item => {
        return item["snippet"];
      });
    }));
  }

}
