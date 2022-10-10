import { Injectable } from '@angular/core';
import {catchError, Observable, retry} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {movieApiConfig} from "../movie-config";
import {MovieSearchService} from "../movie-search-page/movie-search.service";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient, private movieSearchService: MovieSearchService) { }
  getMovieDetails(id: number): Observable<any> {
    console.log(`${movieApiConfig.host}/${id}?api_key=${movieApiConfig.mykey}`);
    return this.http.get<any>(`${movieApiConfig.host}/movie/${id}?api_key=${movieApiConfig.mykey}`)
      .pipe(
        retry(1),
        catchError(this.movieSearchService.handleError)
      );
  }

  getMovieTrailer(id: number): Observable<any> {
    return this.http.get<any>(`${movieApiConfig.host}/movie/${id}/videos?api_key=${movieApiConfig.mykey}`)
      .pipe(
        retry(1),
        catchError(this.movieSearchService.handleError)
      );
  }
}
