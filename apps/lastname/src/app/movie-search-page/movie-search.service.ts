import { Injectable } from '@angular/core';
import {catchError, Observable, retry, throwError} from "rxjs";
import {movieApiConfig} from "../movie-config";
import {HttpClient} from "@angular/common/http";




@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any> {
    return this.http.get<any>(`${movieApiConfig.host}/movie/top_rated?api_key=${movieApiConfig.mykey}&page=${movieApiConfig.numberOfPage}&language=${movieApiConfig.language}&region=${movieApiConfig.region}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  searchMovie(query: string): Observable<any> {
    return this.http.get<any>(movieApiConfig.search + query)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }



  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
