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

  constructor(private homepageservice : HomePageServiceService) {}

  ngOnInit(): void {
    this.nowPlayingSubscription = this.homepageservice.getNowPlaying().subscribe(res => {
       this.nowPLayingList = res.results;
       console.log(this.nowPLayingList)
    })
  }
}
