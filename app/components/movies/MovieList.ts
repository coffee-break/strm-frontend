import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Movie} from "../../services/movies/Movie";
import {MoviesRepository} from "../../services/movies/MoviesRepository";


@Component({
  selector: 'movies',
  directives: [CORE_DIRECTIVES],
  templateUrl: './components/movies/movie-list.html',
  styleUrls: ['./components/movies/movie-list.css']
})

export class MovieListCmp {
  public movies: Movie[];

  constructor(moviesService:MoviesRepository) {
    this.movies = moviesService.get();
  }
}
