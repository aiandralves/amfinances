import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingupComponent } from './singup.component';

const routes: Routes = [
    {
        path: '',
        component: SingupComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SingupRoutingModule {}
