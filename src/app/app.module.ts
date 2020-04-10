import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgUploadComponent } from './dashboard/img-upload/img-upload.component';
import {APP_ROUTING} from './router';

@NgModule({
  declarations: [
    AppComponent,
    ImgUploadComponent
  ],
  imports: [
    BrowserModule, 
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
