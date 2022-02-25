import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountController } from 'src/app/controllers/accounts.controller';
import { Account } from 'src/app/models/Account';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    account: Account;

    constructor(
        private router: Router,
        private accountController: AccountController
    ) {}

    @Output() toggle: EventEmitter<any> = new EventEmitter();

    ngOnInit(): void {
        this.findAccount();
        this.account = JSON.parse(localStorage.getItem('account') as string);
    }

    toggleSidebar() {
        this.toggle.emit();
    }

    async findAccount() {
        let account = await this.accountController.findAccount();
        this.account.avatar = account.avatar;
        this.account.name = account.name;
    }

    public logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}
