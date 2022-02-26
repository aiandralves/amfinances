import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';

import { AuthController } from 'src/app/controllers/auth.controller';
import { Account } from 'src/app/models/Account';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
    selector: 'app-singup',
    templateUrl: './singup.component.html',
    styleUrls: ['./singup.component.scss'],
})
export class SingupComponent implements OnInit {
    formGroup: FormGroup = new FormGroup({});
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

    createForm() {
        this.formGroup = this.fb.group({
            name: ['', Validators.required],
            cpf: ['', Validators.required],
            password: ['', Validators.required],
            avatar: [''],
        });
    }

    async createAccount() {
        try {
            if (this.formGroup.dirty && this.formGroup.valid) {
                let account: Account = <Account>this.formGroup.value;
                await this.authController.create(account);
                this.toast.toast('Usuário cadastrado com sucesso!');
                this.router.navigate(['/login']);
            } else {
                this.toast.toast(
                    'Campos nome, cpf e senha são obrigatórios',
                    true
                );
            }
        } catch (error: any) {
            this.toast.toast(error.error.message, true);
        }
    }
}
