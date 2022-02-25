import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';

import { AuthController } from 'src/app/controllers/auth.controller';
import { Account } from 'src/app/models/Account';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
    selector: 'app-singin',
    templateUrl: './singin.component.html',
    styleUrls: ['./singin.component.scss'],
})
export class SinginComponent implements OnInit {
    formGroup: FormGroup;
    MASKS = utilsBr.MASKS;

    constructor(
        private authController: AuthController,
        private router: Router,
        private toast: UtilsService,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.createForm();
    }

    private createForm() {
        this.formGroup = this.fb.group({
            cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
            password: ['', Validators.required],
        });
    }

    async login() {
        try {
            let response = await this.authController.login(
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
