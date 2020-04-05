import { Injectable } from '@angular/core';
import { Movie } from "./movie";
import { Movies } from "./movie.datasource";
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[];

  constructor(private loggingService: LoggingService) { 
    this.loggingService.add("constructor function was called.");
    this.movies = Movies;
  }

  getMovies(): Observable<Movie[]> {
    this.loggingService.add("getMovies function was called.");
    return of(this.movies);
  }

  getMovie(id: number): Observable<Movie> {
    this.loggingService.add("getMovie function was called.");
    return of(this.movies[id]);
  }
}
