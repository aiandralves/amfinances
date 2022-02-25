import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Statement } from '../models/Statement';
import { UtilsService } from '../utils/utils.service';

@Injectable({
    providedIn: 'root',
})
export class StatementService {
    private api: string = environment.api;

    constructor(private http: HttpClient, private toast: UtilsService) {}

    findById(idstatement: string | null): Observable<Statement> {
        return this.http
            .get<Statement>(`${this.api}/statement/${idstatement}`)
            .pipe(
                map((obj) => obj),
                catchError((e) => this.errorHandler(e))
            );
    }

    errorHandler(e: any): Observable<any> {
        this.toast.toast('Ooops! Ocorreu um erro!', true);
        return EMPTY;
    }
}
