import {Inject, Injectable, Injector} from '@angular/core';
import {Observable} from "rxjs";
import {movieApiConfig} from "../movie-config";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HomePageServiceService {

  constructor( private http: HttpClient) { }

  getNowPlaying(): Observable<any>{
    return this.http.get<any>(`${movieApiConfig.host}/movie/now_playing?api_key=${movieApiConfig.mykey}&page=${movieApiConfig.numberOfPage}&language=${movieApiConfig.language}&region=${movieApiConfig.region}`)
  }
}


