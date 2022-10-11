import { Component, OnInit } from '@angular/core';
import {HomePageServiceService} from "./home-page-service.service";
import {Subscription} from "rxjs";
import {nowPLaying} from "./nowPlaying.model";
import {popular} from "./popular.model";


@Component({
  selector: 'last-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  nowPLayingList : nowPLaying[];
  PopularList:popular[];
  concatSrc: string;

  constructor(private homePageService : HomePageServiceService) {}

  ngOnInit(): void {
this.homePageService.getNowPlaying().subscribe(res => {
       this.nowPLayingList = res.results;

    })

    this.homePageService.getPopular().subscribe(res => {
      this.PopularList = res.results;

    })
  }

  concatSrcFunction(i: number, path: any) {
    this.concatSrc = `https://image.tmdb.org/t/p/original${path}`
    return this.concatSrc

  }
}
