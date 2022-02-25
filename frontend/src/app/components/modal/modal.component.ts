import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { StatementController } from 'src/app/controllers/statements.controles';
import { Statement } from 'src/app/models/Statement';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
    title: string;
    btnTitle: string;
    operation: any;

    formGroup: FormGroup;
    id: string;

    constructor(
        public statementController: StatementController,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private toast: UtilsService
    ) {}

    ngOnInit(): void {
        this.buildModal();
        this.createForm();
    }

    private buildModal() {
        this.title = this.data.title;
        this.btnTitle = this.data.btnTitle;
        this.operation = this.data.operation;
    }

    createForm() {
        this.formGroup = new FormGroup({});

        this.formGroup.addControl(
            'title',
            new FormControl('', Validators.required)
        );
        this.formGroup.addControl(
            'amount',
            new FormControl('', Validators.required)
        );
    }

    buildStatement() {
        let statement: Statement = <Statement>this.formGroup.value;
        return statement;
    }
}
