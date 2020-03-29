import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
    selector: "movies", //<movies></movies>
    //selector: ".movies" //<div class=movies></div>
    //selector: "#movies" //<div id=movies></div>
    templateUrl: "movies.component.html"
})
export class MoviesComponent {
    array: Movie[];
    selectedMovie: Movie;

    constructor(private movieService: MovieService) {}

    ngOnInit(): void {
        this.movieService.getMovies().subscribe(movies=>{
            this.array = movies;
        });
    }

    onSelected(movie:Movie) {
        this.selectedMovie = movie;
    }
}