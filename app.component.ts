import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MovieService } from './services/movie.service';
import { IMovieList } from './interfaces/interface1';
import { CommonFunction } from './common';

declare const alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class AppComponent implements OnInit {
 
 /**Public variable */
moviesArray: IMovieList[] = [];


moviesModel: IMovieList;
movieDetail: IMovieList;

// Using constructor, call the movieService.
// this shorthand syntax automatically creates and
// initializes a new private member in the class
constructor(private movieService: MovieService ) { }

ngOnInit() {
  this.movieModel();
  this.moviesArray = this.movieService.getMovieList();
}

movieModel() {
  /**Define default values */
  return this.moviesModel = {
    Name: '',
    Description: '',
    Rating: 0,
    Rdate: new CommonFunction().getCurrentDate()
  };
};

/**Add a todo */
addMovie(values) {
  this.movieDetail = {
    Name: values.Name,
    Description: values.Description,
    Rating: values.Rating,
    Rdate: values.Rdate
  };
  // /**Call function from service. */
  this.movieService.addMovie(this.movieDetail);
  // Using 3rd party library to show message.
  alertify.notify('Movie Added Successfully', 'success', 3);
  this.movieService.getMovieList();
};
}
