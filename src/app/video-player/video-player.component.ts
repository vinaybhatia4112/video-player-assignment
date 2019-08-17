import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

export interface Valuefy {
  'name': string;
  'poster': string;
  'trailer': string;
  'year': string;
}

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, OnChanges {
  constructor(public sanitizer: DomSanitizer) {
  }

  videoSource = '';

  @Input() videoSrc: Valuefy[] = [];
  @Input() chosenVideo: string;


  ngOnInit() {
    this.videoSource = this.videoSrc[4].trailer;
  }

  ngOnChanges() {
    this.videoSource = this.chosenVideo;
  }


}
