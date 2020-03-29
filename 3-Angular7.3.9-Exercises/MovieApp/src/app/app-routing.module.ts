import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
  { path: "movies", component: MoviesComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }