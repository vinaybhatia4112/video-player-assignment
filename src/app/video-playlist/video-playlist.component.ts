import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';

export interface Valuefy {
  'name': string;
  'poster': string;
  'trailer': string;
  'year': string;
}


@Component({
  selector: 'app-video-playlist',
  templateUrl: './video-playlist.component.html',
  styleUrls: ['./video-playlist.component.css']
})
export class VideoPlaylistComponent implements OnInit, OnChanges {


  @Input() apiResponse: Valuefy[] = [];
  @Output() videoSelected = new EventEmitter();


  slides = [];
  slideConfig = {
    'centerMode': true,
    'arrow': true,
    'centerPadding': '20px',
    'nextArrow': '<div style="padding: 20px 0px 0px 20px"><button style="padding: 10px;background-color: #FFEDE6;text-decoration: none;border: none;">Next</button></div>',
    'prevArrow': '<div style="padding: 0px 0px 20px 20px"><button style="padding: 10px;background-color: #FFEDE6;text-decoration: none;border: none;">Previous</button></div>',
    'slidesToShow': 3,
    'slidesToScroll': 1,
    'adaptiveHeight': true
  };

  constructor() {
  }


  ngOnInit() {
  }

  ngOnChanges() {
    this.apiResponse.forEach(res => {
      const posterImage = {
        img: '',
      };
      posterImage.img = res.poster;
      this.slides.push(posterImage);
    });
  }


  slickInit(e) {
    console.log('slick initialized');
  }

  onVideoSelect(index) {
    this.videoSelected.emit(this.apiResponse[index]);
  }
}
