import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { AlbumComponent } from './components/album/album.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoComponent } from './components/photo/photo.component';
import { LoginComponent } from './components/login/login.component';
import { CustomMaterialModule } from '../custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AlbomDetailComponent } from './components/albom-detail/albom-detail.component';



@NgModule({
  declarations: [
    PostListComponent,
    
    AlbumComponent,
    PhotoListComponent,
    PhotoComponent,
    LoginComponent,
    AlbomDetailComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class UiModule { }
