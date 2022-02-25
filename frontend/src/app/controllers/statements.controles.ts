import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Statement } from '../models/Statement';

@Injectable()
export class StatementController {
    private api: string = environment.api;

    constructor(private http: HttpClient) {}

    async deposit(statement: Statement) {
        return this.http
            .post(`${this.api}/statement/deposito`, statement)
            .toPromise()
            .then((data) => {
                return data;
            });
    }

    async withdraw(statement: Statement) {
        return this.http
            .post(`${this.api}/statement/saque`, statement)
            .toPromise()
            .then((data) => {
                return data;
            });
    }

    async balance(): Promise<any> {
        return this.http
            .get<any>(`${this.api}/statement/balance`)
            .toPromise()
            .then((data) => {
                return data;
            });
    }

    async operation(idaccount: string): Promise<Statement> {
        return this.http
            .get<Statement>(`${this.api}/statement/${idaccount}`)
            .toPromise()
            .then((data) => {
                return data;
            });
    }
}
