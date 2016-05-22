import {Component} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component';
import {NewContactComponent} from './contacts/new-contact.component';
import {ROUTER_DIRECTIVES} from  'angular2/router'
import {RouteConfig} from  'angular2/router'

import {HttpTestComponent} from './http-test.component'

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav>
                <a [routerLink]="['Contacts']" >Contacts</a>
                <a [routerLink]="['NewContact']" >New Contact</a>
            </nav>
        </header>    
        <div class="main">
            <router-outlet></router-outlet>
        </div>    
        <http-test></http-test>
        <div class="pipes">
            <h2>Date Pipe</h2>
            {{date | date}}
            <h2>Number Pipe</h2>
            {{4.566 | number:'1.2-2' }}
            <h2>Currency Pipe</h2>
            {{ 54.98 | currency:'INR':true }}
            
            <h2>Async Pipe</h2>
            {{ randomData | async}}
            
        </div>
    `,
    directives: [ContactListComponent, HttpTestComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true },
    { path: '/newContact', name: 'NewContact', component: NewContactComponent }
])


export class AppComponent {
    date: Date = new Date();
    randomData = new Promise((resolve,reject)=>{ 
        setTimeout(()=> resolve('Random data from timeout!'),5000);
    })
}