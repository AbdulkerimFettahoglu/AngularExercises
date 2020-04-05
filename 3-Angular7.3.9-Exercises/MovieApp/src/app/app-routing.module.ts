import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

export const routes: Routes = [
  { path: '',  redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'details/:id', component: MovieDetailComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }