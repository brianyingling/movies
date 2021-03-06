import {Component} from 'angular2/core';
import {
	FORM_DIRECTIVES,
	FormBuilder,
	ControlGroup,
	AbstractControl,
	Validators
} from 'angular2/common';

import 'rxjs/add/operator/filter';
import Movie from '../../models/movie';
import SearchService from '../../services/SearchService';
import MovieService from '../../services/MovieService';

@Component({
	selector: 'search',
	directives: [FORM_DIRECTIVES],
	template: `
		<div class="search">
			<h1>Search for Movies</h1>
			<form [ngFormModel]="form" (submit)="submit($event)">
				<div class="form-group">
					<label for="search">Search</label>
					<input 
						[(ngFormControl)]="query" 
						type="text" 
						class='form-control'
						required>
					<button type="submit" class='btn btn-default'>
						Submit
					</button>
				</div>
			</form>
			<h2>{{query.value}}</h2>
			<div>
				<h2>Results</h2>
				<div *ngFor="#result of results">
					<img src="{{result.poster}}" style="float:left;margin:10px;">
				</div>
			</div>
		</div>
	`
})
export default class SearchComponent {
	query: AbstractControl;
	form: ControlGroup;
	results: Movie[]
	
	constructor(fb: FormBuilder, public service: SearchService, public movies: MovieService) {
		this.form = fb.group({
			'query': ['', Validators.required]
		});
		this.query = this.form.controls['query'];
	}

	submit(e) {
		this.service.query(this.query.value)
			.subscribe(
				data => this.setResults(data.Search),
				err  => this.logError(err),
				()   => this.completed()
			);

	}

	logError(err) {
		console.log('an error occurred:', err);
	}

	completed() {
		console.log('completed.');
	}
 
	setResults(results) {
		this.results = results.map(res => this.movies.createMovie(res));
	}
}