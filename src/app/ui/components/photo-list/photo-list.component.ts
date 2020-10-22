import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IAlbum, IPhoto } from 'src/app/data';
import { MyService } from 'src/app/my-service.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  @Input() album: IAlbum;
  photos: IPhoto[] = [];
  title="";
  
  constructor(public service: MyService,private router:Router) { }

  ngOnInit(): void {
    this.getPhotosOfThisAlbum();
  }
  getPhotosOfThisAlbum() {
    this.service.subscribeForPhotosOfCurrentAlbum(this.album.id).subscribe((photos) => {
      this.photos = photos;
    })
  }
  getTitle(photo:IPhoto){
    this.title=photo.title;
  }
  photoClicked(photo:IPhoto){
    this.router.navigate([`albums/${photo.albumId}/photos`])
  }

}
