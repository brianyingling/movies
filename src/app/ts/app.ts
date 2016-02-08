import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {
	HTTP_PROVIDERS,
	JSONP_PROVIDERS
} from 'angular2/http';
import {SEARCH_PROVIDERS} from './services/SearchService';
import {MOVIE_PROVIDERS} from './services/MovieService';
import SearchComponent from './components/Search/SearchComponent';

@Component({
	selector: 'app',
	directives: [SearchComponent],
	template:`
		<div>
			<search></search>
		</div>
	`
})
class App {}

bootstrap(App, [
	HTTP_PROVIDERS,
	JSONP_PROVIDERS,
	SEARCH_PROVIDERS,
	MOVIE_PROVIDERS
]);