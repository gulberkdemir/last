import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MovieSearchPageComponent} from "./movie-search-page/movie-search-page.component";
// import { CommonModule } from '@angular/common';
// import {RouterModule, Routes} from "@angular/router";
// import {WeatherAllComponent} from "./weather-all/weather-all.component";
// import {ErrorComponentComponent} from "./error-component/error-component.component";
// import {NotFoundComponentComponent} from "./not-found-component/not-found-component.component";

const APP_ROUTER: Routes = [
  { path: '', redirectTo:'/main-page', pathMatch:'full' },
  { path: ':movie-search', component: MovieSearchPageComponent }
  // { path: 'service/search', component: ErrorComponentComponent },
  // {path: '**', redirectTo: '/not-found' },
  // {path: 'not-found', component: NotFoundComponentComponent },

];


@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    // RouterModule.forRoot(APP_ROUTER)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
