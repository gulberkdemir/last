import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'last-result-tile',
  templateUrl: './result-tile.component.html',
  styleUrls: ['./result-tile.component.scss'],
})
export class ResultTileComponent implements OnInit {

  @Input() Results: any;
  @Input() noResultForTile: any;
  constructor() {}

  ngOnInit(): void {}
}
