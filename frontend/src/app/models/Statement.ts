import { Account } from './Account';

export class Statement {
    id?: string;
    title?: string;
    amount?: number;
    type?: Type;
    account?: Account;

    constructor(
        id?: string,
        title?: string,
        amount?: number,
        type?: Type,
        account?: Account
    ) {
        this.id = id;
        this.title = title;
        this.amount = amount;
        this.type = type;
        this.account = account;
    }
}

enum Type {
    DEPOSITO = 'deposito',
    SAQUE = 'saque',
}
