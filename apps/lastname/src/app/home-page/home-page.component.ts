import { Component, OnInit } from '@angular/core';
import {HomePageServiceService} from "./home-page-service.service";
import {Subscription} from "rxjs";
import {nowPLaying} from "./nowPlaying.model";

@Component({
  selector: 'last-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  nowPlayingSubscription: Subscription;
  nowPLayingList : nowPLaying[];
  concatSrc: string;

  constructor(private homePageService : HomePageServiceService) {}

  ngOnInit(): void {
    this.nowPlayingSubscription = this.homePageService.getNowPlaying().subscribe(res => {
       this.nowPLayingList = res.results;

    })
  }

  concatSrcFunction(i: number) {
    this.concatSrc = `https://image.tmdb.org/t/p/original${this.nowPLayingList[i].backdrop_path}`
    return this.concatSrc

  }
}
