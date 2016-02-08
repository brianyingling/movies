import {Injectable, provide} from 'angular2/core';
import {Http, Jsonp } from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export default class SearchService {
	constructor(public http: Http, public jsonp: Jsonp) {}

	query(term: string) {
		return this.jsonp.request(`http://www.omdbapi.com/?s=${term}&y=&plot=short&r=json&callback=JSONP_CALLBACK`)
			.map(res => res.json());
	}
}

export var SEARCH_PROVIDERS: Array<any> = [
	provide(SearchService, {useClass: SearchService})
];