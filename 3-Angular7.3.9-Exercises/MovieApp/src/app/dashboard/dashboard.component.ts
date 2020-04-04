import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  movies: Movie[];
  moviesLength: number;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    return this.movieService.getMovies().subscribe(returnObject => {
      this.movies = returnObject;
      this.moviesLength = returnObject.length;
    });
  }

}
