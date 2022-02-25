import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./pages/singin/singin.module').then((m) => m.SinginModule),
    },
    {
        path: 'cadastrar',
        loadChildren: () =>
            import('./pages/singup/singup.module').then((m) => m.SingupModule),
    },
    {
        path: 'painel',
        loadChildren: () =>
            import('./pages/painel/painel.module').then((m) => m.PainelModule),
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
