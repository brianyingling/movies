import {Injectable, provide} from 'angular2/core';

import Movie from '../models/Movie';

export default class MovieService {
	movies: Movie[];

	createMovie(movie) {
		var movie: any = new Movie(movie);
		this.movies = this.movies || [];
		this.movies.push(movie);
		return movie;
	}
}

export var MOVIE_PROVIDERS: Array<any> = [
	provide(MovieService, { useClass: MovieService })
];