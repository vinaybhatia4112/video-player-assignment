import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  apiResponse: any = [];
  chosenVideo = '';
  name = '';
  videoSource = '';
  responseCollection = false;
  apiURL = 'https://valuefy-assignment-x.herokuapp.com/api/getVideos';

  ngOnInit() {
    this.getVideos();
  }

  constructor(private httpClient: HttpClient, public sanitizer: DomSanitizer) {
  }

  getVideos() {
    const headers = new HttpHeaders({'Source': 'Web', 'Content-Type': 'application/json'});
    return this.httpClient.get(this.apiURL, {headers: headers}).subscribe((res) => {
      this.apiResponse = res;
      this.responseCollection = true;
      this.name = this.apiResponse[4].name;
    });
  }

  videoSelected(videoObject) {
    this.chosenVideo = videoObject.trailer;
    this.name = videoObject.name;
  }
}
