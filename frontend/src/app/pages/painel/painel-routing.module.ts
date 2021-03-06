import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PainelComponent } from './painel.component';
import { HomeComponent } from '../home/home.component';
import { AccountComponent } from '../account/account.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: PainelComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'conta',
                component: AccountComponent,
            },
            {
                path: 'profile',
                component: ProfileComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PainelRoutingModule {}
