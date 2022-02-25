import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Breadcrumb } from '../models/Breadcrumb';

@Injectable({
    providedIn: 'root',
})
export class BreadcrumbService {
    private bread = new BehaviorSubject<Breadcrumb>({
        title: '',
        icon: '',
        link: '',
    });

    constructor() {}

    get breadcrumb() {
        return this.bread.value;
    }

    set breadcrumb(breadcrumb: Breadcrumb) {
        this.bread.next(breadcrumb);
    }
}
