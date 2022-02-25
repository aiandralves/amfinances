import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { StatementController } from 'src/app/controllers/statements.controles';
import { Statement } from 'src/app/models/Statement';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public statement: Statement) {}

    ngOnInit(): void {}
}
