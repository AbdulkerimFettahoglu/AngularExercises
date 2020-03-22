import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  moviesArray = ["movie1", "movie2"];
  constructor() { }

  ngOnInit() {
  }

}
