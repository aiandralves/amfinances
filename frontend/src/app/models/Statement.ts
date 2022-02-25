import { Account } from './Account';

export class Statement {
    id?: string;
    title?: string;
    amount?: number;
    idaccount?: string;
    account?: Account;

    constructor(
        id?: string,
        title?: string,
        amount?: number,
        idaccount?: string,
        account?: Account
    ) {
        this.id = id;
        this.title = title;
        this.amount = amount;
        this.idaccount = idaccount;
        this.account = account;
    }
}
