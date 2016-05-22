import {Component} from 'angular2/core';
import {Contact} from './contact';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact.service';
import {OnInit} from 'angular2/core';


@Component({
    selector: 'contact-list',
    template: `
    <ul>
        <li *ngFor="#contact of contacts" (click)="onSelect(contact)"
            class="contact"
            [class.clicked]="selectedContact=== contact">
            {{contact.firstName}} {{contact.lastName}}
        </li>
    </ul>
    <contact *ngIf="selectedContact!==null" [contact]="selectedContact"></contact>    
    `,
    directives: [ContactComponent],
    providers: [ContactService],
    styleUrls: ["../src/css/contact-list.css"]

})

export class ContactListComponent implements OnInit {

    public contacts: Contact[];

    constructor(private _contactService: ContactService) { }

    public selectedContact = null;

    getContacts() {
        this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
    }

    onSelect(contact) {
        this.selectedContact = contact;
    }

    ngOnInit(): any {
        this.getContacts();

    }
}

