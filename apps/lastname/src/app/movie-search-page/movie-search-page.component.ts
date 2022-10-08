import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MovieSearchService} from "./movie-search.service";

@Component({
  selector: 'last-movie-search-page',
  templateUrl: './movie-search-page.component.html',
  styleUrls: ['./movie-search-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MovieSearchPageComponent implements OnInit {
  Movies: any = [];
  apiResponse: any;
  searchQuery = '';
  timer = null;
  noResult = false;

  constructor(private movieSearchService: MovieSearchService) {}

  ngOnInit() {

    this.movieSearchService.getAllMovies().subscribe(
      res => {
        this.apiResponse = res.results;
        this.Movies = res.results;
      } )

  }
  searchMovie(searchStr: string) {
    setTimeout(() => {
      searchStr = searchStr.trim();
      if (searchStr === '') {
        this.Movies = this.apiResponse;
        return;
      }
      this.movieSearchService.searchMovie(searchStr).subscribe((data: {
        total_results: number;
      }) => {
        this.noResult = false;
        if (data.total_results === 0) {
          this.Movies = [];
          this.noResult = true;
          return;
        }
        this.Movies = data;
      });
    }, 250);
  }



}
