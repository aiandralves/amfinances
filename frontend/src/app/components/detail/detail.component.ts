import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { StatementController } from 'src/app/controllers/statements.controles';
import { Account } from 'src/app/models/Account';
import { Statement } from 'src/app/models/Statement';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
    statement: Statement;
    account: Account;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private statementController: StatementController,
        private toast: UtilsService
    ) {}

    ngOnInit(): void {
        this.findStatement();
        this.account = JSON.parse(localStorage.getItem('account') as string);
    }

    async findStatement() {
        try {
            let statement = await this.statementController.findStatement(
                this.data.id
            );
            this.statement = statement;
        } catch (error: any) {
            this.toast.toast(error.error.message, true);
        }
    }
}
