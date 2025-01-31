import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logged=true;
  constructor(public router: Router) { }

  ngOnInit(): void {

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
