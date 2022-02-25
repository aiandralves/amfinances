import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SinginComponent } from './singin.component';

const routes: Routes = [
    {
        path: '',
        component: SinginComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SinginRoutingModule {}
