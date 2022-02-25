import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Account } from '../models/Account';

@Injectable()
export class AccountController {
    private api: string = environment.api;

    constructor(private http: HttpClient) {}

    async findAccount(): Promise<Account> {
        return this.http
            .get<Account>(`${this.api}/profile`)
            .toPromise()
            .then((data) => {
                return data;
            });
    }
}
