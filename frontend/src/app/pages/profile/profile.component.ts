import { Component, OnInit } from '@angular/core';
import { AccountController } from 'src/app/controllers/accounts.controller';
import { Account } from 'src/app/models/Account';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    account: Account;

    constructor(private accountController: AccountController) {}

    ngOnInit(): void {
        this.findAccount();
        this.account = JSON.parse(localStorage.getItem('account') as string);
    }

    async findAccount() {
        let account = await this.accountController.findAccount();
        this.account = account;
    }
}
