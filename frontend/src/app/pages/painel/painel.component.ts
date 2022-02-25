import { Component } from '@angular/core';

@Component({
    selector: 'app-painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.scss'],
})
export class PainelComponent {
    sidebarOpen = true;

    sidebarToggle() {
        this.sidebarOpen = !this.sidebarOpen;
    }
}
