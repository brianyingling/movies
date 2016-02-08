export default class Movie {
	title: string;
	year: string;
	imdbId: string;
	type: string;
	poster: string;

	constructor(obj: any) {
		this.title = obj && obj.Title || '';
		this.year = obj && obj.Year || '';
		this.imdbId = obj && obj.ImdbId || '';
		this.type = obj && obj.Type || '';
		this.poster = obj && obj.Poster || '';
	}
}