import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

import 'rxjs/add/operator/map';

@Injectable()

export class HttpTestService {
    constructor(private _http: Http) {

    }

    getCurrentTime() {
        return this._http.get('http://date.jsontest.com').map(res => res.json());
    }

    postJSON() {
        var jsn = JSON.stringify({ key1: 'value1', key2: 2 });
        var param = "json=" + jsn;

        var header = new Headers();
        header.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post("http://validate.jsontest.com/", param, {
            headers: header
        }).map(res => res.json());

    }
}