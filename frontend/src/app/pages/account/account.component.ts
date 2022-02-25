import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from 'src/app/components/modal/modal.component';
import { StatementController } from 'src/app/controllers/statements.controles';
import { Statement } from 'src/app/models/Statement';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit, AfterViewInit {
    balance: any;

    constructor(
        private modal: MatDialog,
        private statementController: StatementController,
        private toast: UtilsService
    ) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.findBalance();
    }

    deposit = async (controller: any, statement: Statement) => {
        try {
            await controller.deposit(statement);
        } catch (error: any) {
            this.toast.toast(error.error.message, true);
        } finally {
            console.log('Encerrado!');
        }
    };

    withdraw = async (controller: any, statement: Statement) => {
        try {
            await controller.withdraw(statement);
        } catch (error: any) {
            this.toast.toast(error.error.message, true);
        } finally {
            console.log('ok');
        }
    };

    openModalDeposit() {
        const openModal = this.modal.open(ModalComponent, {
            data: {
                title: 'Depósito',
                btnTitle: 'Depositar',
                operation: this.deposit,
            },
        });

        openModal.afterClosed().subscribe((result) => {
            console.log('Fechado!!!');
        });
    }

    openModalWithdraw() {
        const openModal = this.modal.open(ModalComponent, {
            data: {
                title: 'Saque',
                btnTitle: 'Sacar',
                operation: this.withdraw,
            },
        });

        openModal.afterClosed().subscribe((result) => {
            console.log('Fechado!!!');
        });
    }

    async findBalance() {
        let balance = await this.statementController.balance();
        this.balance = balance.statement;
    }
}
