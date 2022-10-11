import {Inject, Injectable, Injector} from '@angular/core';
import {catchError, Observable, retry} from "rxjs";
import {movieApiConfig} from "../movie-config";
import {HttpClient} from "@angular/common/http";
import {MovieSearchService} from "../movie-search-page/movie-search.service";


@Injectable({
  providedIn: 'root'
})
export class HomePageServiceService {

  constructor( private http: HttpClient, private movieSearchService: MovieSearchService) { }

  getNowPlaying(): Observable<any>{
    return this.http.get<any>(`${movieApiConfig.host}/movie/now_playing?api_key=${movieApiConfig.mykey}&page=${movieApiConfig.numberOfPage}&language=${movieApiConfig.language}&region=${movieApiConfig.region}`)
      .pipe(
        retry(1),
        catchError(this.movieSearchService.handleError)
      );
  }

  getPopular(): Observable<any>{
    return this.http.get<any>(`${movieApiConfig.host}/movie/popular?api_key=${movieApiConfig.mykey}&page=${movieApiConfig.numberOfPage}&language=${movieApiConfig.language}&region=${movieApiConfig.region}`)
      .pipe(
        retry(1),
        catchError(this.movieSearchService.handleError)
      );
  }



}


