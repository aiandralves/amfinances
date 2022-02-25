import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from 'src/app/components/detail/detail.component';

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
    id: string;

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
            this.findBalance();
        }
    };

    withdraw = async (controller: any, statement: Statement) => {
        try {
            await controller.withdraw(statement);
        } catch (error: any) {
            this.toast.toast(error.error.message, true);
        } finally {
            this.findBalance();
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

    openModalDetail(statement: Statement) {
        const openModal = this.modal.open(DetailComponent, {
            data: {
                id: statement.id,
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
