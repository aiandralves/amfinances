import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { AuthInterceptor } from '../guards/auth.interceptor';
import { StatementController } from '../controllers/statements.controles';
import { AuthController } from '../controllers/auth.controller';
import { AccountController } from '../controllers/accounts.controller';

const modules = [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
];

const providers = [AuthController, StatementController, AccountController];

@NgModule({
    declarations: [],
    imports: [...modules],
    exports: [...modules],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        ...providers,
    ],
})
export class SharedModule {}
