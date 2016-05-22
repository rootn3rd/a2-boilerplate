import {Component} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router'

import {OnInit} from 'angular2/core'
import {ControlGroup} from 'angular2/common'
import {FormBuilder} from 'angular2/common'
import {Validators} from 'angular2/common'

@Component({
    template: `
        
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
            <div>
                <label for="first-name">First Name:</label>
                <input type="text" id="first-name" 
                    [ngFormControl] = "myForm.controls['firstName']"
                />
            </div>
            <div>
                <label for="last-name">Last Name:</label>
                <input type="text" id="last-name" 
                    [ngFormControl] = "myForm.controls['lastName']"
                
                />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="text" id="email" 
                    [ngFormControl] = "myForm.controls['emailId']"
                
                />
            </div>
            <div>
               <label for="phone"> Phone</label>
                <input type="text" id="phone" 
                    [ngFormControl] = "myForm.controls['phone']"
                
                />
            </div>
            <button type="submit" [disabled]="!myForm.valid" >Create Contact</button>
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

    newContact: Contact;

    myForm: ControlGroup;

    constructor(private _contactService: ContactService,
        private _router: Router,
        private _routeParams: RouteParams,
        private _formBuilder: FormBuilder) {

    }


    ngOnInit(): any {


        this.myForm = this._formBuilder.group({
            "firstName": ["", Validators.required],
            "lastName": [this._routeParams.get("lastName"), Validators.required],
            "phone": ["", Validators.required],
            "emailId": ["", Validators.required],
        });

    }

    onSubmit(value) {
        console.log(value);
        this._contactService.addContact(value);

        this._router.navigate(["Contacts"])

    }
}

