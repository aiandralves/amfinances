import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingupRoutingModule } from './singup-routing.module';
import { SingupComponent } from './singup.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [SingupComponent],
    imports: [CommonModule, SingupRoutingModule, SharedModule],
    exports: [SingupRoutingModule],
})
export class SingupModule {}
