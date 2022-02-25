import { Component, OnInit } from '@angular/core';
import { StatementController } from 'src/app/controllers/statements.controles';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    homeData: any;

    constructor(private statementController: StatementController) {}

    ngOnInit(): void {
        this.mountHome();
    }

    private async mountHome() {
        let home = {
            balance: 0,
            withdraws: 0,
            deposits: 0,
        };

        let accountStatement = await this.statementController.balance();
        home.balance = accountStatement.balance;
        home.withdraws = this.sumWithdraws(accountStatement.statement);
        home.deposits = this.sumDeposits(accountStatement.statement);

        this.homeData = home;
    }

    private sumWithdraws(statements: any[]): number {
        let withdraws = 0;

        statements.map((statement) => {
            if (statement.type == 'saque')
                withdraws += Number(statement.amount);
        });

        return withdraws;
    }

    private sumDeposits(statements: any[]): number {
        let deposits = 0;

        statements.map((statement) => {
            if (statement.type == 'deposito')
                deposits += Number(statement.amount);
        });

        return deposits;
    }
}
