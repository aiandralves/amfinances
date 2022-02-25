import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    name: string = '';

    constructor(private router: Router) {}

    @Output() toggle: EventEmitter<any> = new EventEmitter();

    ngOnInit(): void {
        let account = localStorage.getItem('account') as string;
        let response = JSON.parse(account);
        this.name = this.getName(response.name);
    }

    toggleSidebar() {
        this.toggle.emit();
    }

    private getName(name: string): string {
        let names: string = name;
        return names;
    }

    public logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}
