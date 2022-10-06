import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'last-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor( private router: Router) {}

  ngOnInit(): void {

  }
  Hello(){

    // @ts-ignore
    this.router.navigate(['movie-search'], { relativeTo: this.router });

  }
}
