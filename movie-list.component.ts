import { Component, OnInit, Input } from '@angular/core';
import { IMovieList } from '../../interfaces/interface1';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  /**Get the movieDetail from movie-app  */
  @Input() movieDetail;
  imageUrl = 'data:image/png;base64,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';

  moviesList: IMovieList;

  constructor() { }

  ngOnInit() {
  }

}