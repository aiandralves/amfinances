import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

import { Statement } from '@modules/statements/typeorm/entities/Statement';

@Entity('accounts')
export class Account {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @OneToMany(() => Statement, (statement) => statement.id)
    statement: Account[];

    @Column()
    password: string;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
