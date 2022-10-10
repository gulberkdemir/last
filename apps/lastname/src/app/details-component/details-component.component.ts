import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DetailsService} from "./details.service";

@Component({
  selector: 'last-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailsComponentComponent implements OnInit {
  movieId = this.router.snapshot.params['movie-id'];
  MovieDetails: any = {};
  innerWidth: any;

  constructor(  public router: ActivatedRoute,
                private detailsservice: DetailsService,
                public dialog: MatDialog) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    // @ts-ignore
    return this.detailsservice.getMovieDetails(this.movieId)
      .subscribe((data) => {
      this.MovieDetails = data;
    });
  }

}
