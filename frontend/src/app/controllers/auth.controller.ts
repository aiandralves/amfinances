import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Account } from '../models/Account';
import { LoginDTO } from '../dtos/login.dto';

@Injectable()
export class AuthController {
    private api: string = environment.api;

    constructor(private http: HttpClient) {}

    async create(account: Account): Promise<any> {
        return this.http
            .post(`${this.api}/account`, account)
            .toPromise()
            .then((data) => {
                return data;
            });
    }

    async login(account: Account): Promise<LoginDTO> {
        return this.http
            .post<LoginDTO>(`${this.api}/sessions`, account)
            .toPromise()
            .then((data) => {
                return data;
            });
    }
}
