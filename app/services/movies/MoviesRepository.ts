import {Movie} from "./Movie";

export class MoviesRepository {

  get():Movie[] {
    return [new Movie('Snatch')];
  }
}
