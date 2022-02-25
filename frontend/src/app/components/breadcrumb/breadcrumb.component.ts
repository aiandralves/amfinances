import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
    constructor(private breadcrumbService: BreadcrumbService) {}

    ngOnInit(): void {}

    get title(): string {
        return this.breadcrumbService.breadcrumb.title;
    }

    get icon(): string {
        return this.breadcrumbService.breadcrumb.icon;
    }

    get link(): string {
        return this.breadcrumbService.breadcrumb.link;
    }
}
