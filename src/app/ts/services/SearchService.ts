import {Injectable, provide} from 'angular2/core';
import {Http, Jsonp } from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export default class SearchService {
	baseUrl: string;
	constructor(public http: Http, public jsonp: Jsonp) {
		this.baseUrl = "http://www.omdbapi.com/";
	}

	buildUrl(term): string {
		return `${this.baseUrl}?s=${term}&y=&plot=short&r=json&callback=JSONP_CALLBACK`;
	}

	query(term: string) {
		return this.jsonp.request(this.buildUrl(term))
			.map(res => res.json());
	}
}

export var SEARCH_PROVIDERS: Array<any> = [
	provide(SearchService, {useClass: SearchService})
];