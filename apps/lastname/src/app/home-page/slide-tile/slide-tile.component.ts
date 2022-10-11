import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'last-slide-tile',
  templateUrl: './slide-tile.component.html',
  styleUrls: ['./slide-tile.component.scss'],
})
export class SlideTileComponent implements OnInit {
  @Input() Title: string;
  @Input() List: any[];
  concatSrc: string;


  constructor() {}

  ngOnInit(): void {}

  concatSrcFunction(i: number, path: any) {
    this.concatSrc = `https://image.tmdb.org/t/p/original${path}`
    return this.concatSrc

  }

}
