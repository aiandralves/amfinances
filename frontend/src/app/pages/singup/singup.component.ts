import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthController } from 'src/app/controllers/auth.controller';
import { Account } from 'src/app/models/Account';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
    selector: 'app-singup',
    templateUrl: './singup.component.html',
    styleUrls: ['./singup.component.scss'],
})
export class SingupComponent implements OnInit {
    formGroup: FormGroup;

    constructor(
        private authController: AuthController,
        private router: Router,
        private utils: UtilsService
    ) {}

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.formGroup = new FormGroup({});

        this.formGroup.addControl(
            'name',
            new FormControl('', Validators.required)
        );
        this.formGroup.addControl(
            'cpf',
            new FormControl('', Validators.required)
        );
        this.formGroup.addControl(
            'password',
            new FormControl('', Validators.required)
        );
    }

    async createAccount() {
        try {
            let account: Account = <Account>this.formGroup.value;
            await this.authController.create(account);
            this.utils.toast('Usuário cadastrado com sucesso!');
            this.router.navigate(['/login']);
        } catch (error: any) {
            this.utils.toast(error.error.message, true);
        }
    }
}
