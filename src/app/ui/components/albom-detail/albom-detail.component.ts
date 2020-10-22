import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAlbum, IPhoto, IUser } from 'src/app/data';
import { MyService } from 'src/app/my-service.service';

@Component({
  selector: 'app-albom-detail',
  templateUrl: './albom-detail.component.html',
  styleUrls: ['./albom-detail.component.scss']
})
export class AlbomDetailComponent implements OnInit {
  albumId: number;
  photos: IPhoto[] = [];
  user: IUser;
  album: IAlbum;
  constructor(public service: MyService, private route: ActivatedRoute) {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.albumId)
   }
  getUser() {
    this.service.subscribeForAlbums().subscribe((albums) => {
      this.album = albums.find(a => a.id === this.albumId);
      this.service.subscribeForUsers().subscribe((users) => {
        this.user = users.find(u => u.id === this.album.userId)
      })
    })
  }

  ngOnInit(): void {
    this.getPhotosOfThisAlbum();
    this.getUser();
  }
  getPhotosOfThisAlbum() {
    this.service.subscribeForPhotosOfCurrentAlbum(this.albumId).subscribe((photos) => {
      this.photos = photos;
    })
  }

}
