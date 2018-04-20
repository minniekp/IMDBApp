import { Injectable } from '@angular/core';
import { IMovieList } from '../interfaces/interface1';

@Injectable()
export class MovieService {

  moviesList: IMovieList[] = [];

  /** Add Movie in the array List. */
  addMovie(movieDetail: IMovieList) {
    this.moviesList.unshift(movieDetail);
  }

  /**Get the movie list from the array. */
  getMovieList(): IMovieList[] {
    return this.moviesList;
  }


}
