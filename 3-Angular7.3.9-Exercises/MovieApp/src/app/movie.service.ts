import { Injectable } from '@angular/core';
import { Movie } from "./movie";
import { Movies } from "./movie.datasource";
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[];
  private apiMoviesUrl = 'api/movies';

  constructor(private loggingService: LoggingService, private http: HttpClient) { 
    this.loggingService.add("constructor function was called.");
    this.movies = Movies;
  }

  getMovies(): Observable<Movie[]> {
    this.loggingService.add("getMovies function was called.");
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }

  getMovie(id: number): Observable<Movie> {
    this.loggingService.add("getMovie function was called.");
    return this.http.get<Movie>(this.apiMoviesUrl+'/'+id);
  }
}
