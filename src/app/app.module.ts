import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { UserPhotosListComponent } from './user-photos-list/user-photos-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RoverFormComponent,
    PhotosListComponent,
    UserPhotosListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
