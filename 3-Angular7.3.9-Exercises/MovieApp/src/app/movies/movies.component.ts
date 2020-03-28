import { Component } from '@angular/core';
import { Movies } from "../movie.datasource";
import { Movie } from '../movie';
@Component({
    selector: "movies", //<movies></movies>
    //selector: ".movies" //<div class=movies></div>
    //selector: "#movies" //<div id=movies></div>
    templateUrl: "movies.component.html"
})
export class MoviesComponent {
    array = Movies; 
    selectedMovie: Movie;

    onSelected(movie:Movie) {
        this.selectedMovie = movie;
    }
}