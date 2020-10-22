
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './ui/components/post-list/post-list.component';
import { AlbumComponent } from './ui/components/album/album.component';
import { LoginComponent } from './ui/components/login/login.component';
import { PhotoListComponent } from './ui/components/photo-list/photo-list.component';
import { AlbomDetailComponent } from './ui/components/albom-detail/albom-detail.component';

const routes: Routes = [
  { path: 'posts', component:  PostListComponent},
  { path: 'albums', component:  AlbumComponent},
  { path: 'albums/:id/photos', component: AlbomDetailComponent},
  { path: '', component:  LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }