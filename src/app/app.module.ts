import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {InterceptorService} from './interceptor.service';
import {SlickCarouselModule} from 'ngx-slick-carousel';

import {AppComponent} from './app.component';
import {VideoPlaylistComponent} from './video-playlist/video-playlist.component';
import {VideoPlayerComponent} from './video-player/video-player.component';
import {UpperCaseText} from './upper-case-text';
@NgModule({
  declarations: [
    AppComponent,
    VideoPlaylistComponent,
    VideoPlayerComponent,
    UpperCaseText
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlickCarouselModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
