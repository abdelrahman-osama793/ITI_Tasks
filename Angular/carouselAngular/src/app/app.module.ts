import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { SlideshowComponentComponent } from './slideshow-component/slideshow-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponentComponent,
    SlideshowComponentComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
