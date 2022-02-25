import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { HomeComponent } from '../home/home.component';
import { AccountComponent } from '../account/account.component';

@NgModule({
    declarations: [
        PainelComponent,
        SidebarComponent,
        NavbarComponent,
        BreadcrumbComponent,
        ModalComponent,
        HomeComponent,
        AccountComponent,
    ],
    imports: [CommonModule, PainelRoutingModule, SharedModule],
})
export class PainelModule {}
