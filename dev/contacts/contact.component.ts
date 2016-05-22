import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Contact} from './contact';

@Component({
    selector: 'contact',
    template: `
        <div>
            <div>
                <label for="first-name">First Name:</label>
                <input type="text" [(ngModel)]="contact.firstName" id="first-name"/>
            </div>
            <div>
                <label for="last-name">Last Name:</label>
                <input type="text" [(ngModel)]="contact.lastName" id="last-name"/>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="text" [(ngModel)]="contact.emailId" id="email"/>
            </div>
            <div>
               <label for="phone"> Phone</label>
                <input type="text" [(ngModel)]="contact.phone" id="phone"/>
            </div>
            <button (click)="onCreateNew()" >Create New Contact From This Contact</button>
        </div>  
    `,
    inputs: ["contact"],
    styles: [`
        label {
            display : inline-block;
            width : 120px;
        }
        input {
            width: 250px;
        }
    `]

})

export class ContactComponent {

    public contact: Contact = null;
    constructor(private _router: Router) {

    }

    onCreateNew() {
        this._router.navigate(["NewContact", { lastName: this.contact.lastName }])
    }
}

