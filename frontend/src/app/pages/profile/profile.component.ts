import { Component, OnInit } from '@angular/core';
import { AccountController } from 'src/app/controllers/accounts.controller';
import { Account } from 'src/app/models/Account';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    account: Account;

    constructor(
        private accountController: AccountController,
        private breadcrumbService: BreadcrumbService
    ) {}

    ngOnInit(): void {
        this.findAccount();
        this.account = JSON.parse(localStorage.getItem('account') as string);
        this.breadcrumb();
    }

    breadcrumb() {
        this.breadcrumbService.breadcrumb = {
            title: 'Perfil do Usuário',
            icon: 'bx-user',
            link: 'painel/profile',
        };
    }

    async findAccount() {
        let account = await this.accountController.findAccount();
        this.account = account;
    }
}
