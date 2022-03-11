import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

import { Account } from '@modules/accounts/typeorm/entities/Account';
import { OperationType } from '@modules/statements/dtos/OperationType';

@Entity('statements')
export class Statement {
    @PrimaryColumn()
    id: string;

    @Column('uuid')
    idaccount: string;

    @ManyToOne(() => Account, (account) => account.statement)
    @JoinColumn({ name: 'idaccount' })
    account: Account;

    @Column()
    title: string;

    @Column()
    amount: number;

    @Column({ type: 'enum', enum: OperationType })
    type: OperationType;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
