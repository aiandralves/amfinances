import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthController } from 'src/app/controllers/auth.controller';
import { Account } from 'src/app/models/Account';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
    selector: 'app-singin',
    templateUrl: './singin.component.html',
    styleUrls: ['./singin.component.scss'],
})
export class SinginComponent implements OnInit {
    formGroup!: FormGroup;
    errors!: [];

    constructor(
        private controller: AuthController,
        private router: Router,
        private toast: UtilsService
    ) {}

    ngOnInit(): void {
        this.createForm();
    }

    private createForm() {
        this.formGroup = new FormGroup({});

        this.formGroup.addControl(
            'cpf',
            new FormControl('', Validators.required)
        );

        this.formGroup.addControl(
            'password',
            new FormControl('', Validators.required)
        );
    }

    async login() {
        try {
            let response = await this.controller.login(
                <Account>this.formGroup.value
            );
            localStorage.setItem('token', response.token);
            localStorage.setItem('account', JSON.stringify(response.account));

            this.router.navigate(['/painel/home']);
        } catch (error: any) {
            this.toast.toast(error.error.message, true);
        }
    }
}
