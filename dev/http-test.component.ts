import {Component} from 'angular2/core';

import {HttpTestService} from './http-test.service'

@Component({
    selector: 'http-test',
    template: `
        <button (click)="onTestGet()">Test : GET Request</button>
        <p>{{getData}}</p>
        <button (click)="onTestPost()">Test : POST Request</button>
        <p>{{postData}}</p>
    `,
    providers: [HttpTestService]

})

export class HttpTestComponent {

    getData: string;
    postData: string;

    constructor(private _httpTestService: HttpTestService) {

    }

    onTestGet() {
        this._httpTestService.getCurrentTime()
            .subscribe(
            data => this.getData = JSON.stringify(data),
            error => this.getData = JSON.stringify(error),
            () => console.log("OnCompleted"));
    }

    onTestPost() {
        this._httpTestService.postJSON()
            .subscribe(
            data => this.postData = JSON.stringify(data),
            error => this.postData = JSON.stringify(error),
            () => console.log("OnCompleted"));

    }
}

