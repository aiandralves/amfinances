import { Account } from '../models/Account';

export class LoginDTO {
    account: Account;
    auth: boolean;
    token: string;

    constructor(account: Account, auth: boolean, token: string) {
        this.account = account;
        this.auth = auth;
        this.token = token;
    }
}
