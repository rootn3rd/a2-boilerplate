import {Component} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router'

import {OnInit} from 'angular2/core'

@Component({
    template: `
        
        <form #myForm="ngForm" (ngSubmit)="onSubmit()">
            <div>
                <label for="first-name">First Name:</label>
                <input type="text" id="first-name"
                    ngControl="firstName" required
                     [(ngModel)]="newContact.firstName"
                 />
            </div>
            <div>
                <label for="last-name">Last Name:</label>
                <input type="text" id="last-name" 
                    ngControl="lastName" required
                    [(ngModel)]="newContact.lastName"
                />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="text" id="email"
                    ngControl="email" required
                    [(ngModel)]="newContact.emailId"
                 />
            </div>
            <div>
               <label for="phone"> Phone</label>
                <input type="text" id="phone"
                    ngControl="phone" required
                    [(ngModel)]="newContact.phone"
                 />
            </div>
            <!--<button (click)="onAddNewContact(firstName.value, lastName.value, email.value, phone.value)" >Create Contact</button>-->
            <button type="submit"  >Create Contact</button>
        </form>  
    `,
    styles: [`
        label {
            display : inline-block;
            width : 120px;
        }
        input {
            width: 250px;
        }
        .ng-invalid{
            border: 1px solid red;
        }
    `],
    providers: [ContactService]

})

export class NewContactComponent implements OnInit {

    public passedLastName = "";

    newContact: Contact;

    constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams) {

    }

    // onAddNewContact(fname, lname, phne, email) {
    //     let contact: Contact = {
    //         firstName: fname,
    //         lastName: lname,
    //         phone: phne,
    //         emailId: email,
    //     }
    //     this._contactService.addContact(contact);

    //     this._router.navigate(["Contacts"])
    // }

    ngOnInit(): any {
        this.newContact = {
            firstName: "",
            lastName: this._routeParams.get("lastName"),
            phone: "",
            emailId: ""
        }
    }

    onSubmit() { 
        
        this._contactService.addContact(this.newContact);

        this._router.navigate(["Contacts"])
        
    }
}

