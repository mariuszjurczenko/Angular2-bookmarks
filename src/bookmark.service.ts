import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BookmarkService {

    private baseUrl = 'https://angular2test-28483.firebaseio.com/';

    constructor(private http: Http) { }

    getBookmarks() {
        return this.http.get(`${this.baseUrl}/bookmarks.json`)
                     .toPromise()
                     .then(response => this.convert(response.json()));
    }

    private convert(convertResponse){
       return Object.keys(convertResponse)
                .map(id => ({
                    id: id,
                    title: convertResponse[id].Title,
                    url: convertResponse[id].Url
                }))
                .sort((a,b) => b.title.localeCompare(a.title));
    }
}