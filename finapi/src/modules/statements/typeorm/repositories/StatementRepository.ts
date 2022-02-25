import { getRepository, Repository } from 'typeorm';

import { IGetBalanceDTO } from '@modules/statements/dtos/IGetBalanceDTO';
import { IGetOperationDTO } from '@modules/statements/dtos/IGetOperationDTO';
import { IStatementDTO } from '@modules/statements/dtos/IStatementDTO';
import { Statement } from '../entities/Statement';
import { IStatementRepository } from '@modules/statements/repositories/IStatementRepository';

export class StatementRepository implements IStatementRepository {
    private repository: Repository<Statement>;

    constructor() {
        this.repository = getRepository(Statement);
    }

    async create({
        idaccount,
        amount,
        title,
        type,
    }: IStatementDTO): Promise<Statement> {
        const statement = this.repository.create({
            idaccount,
            amount,
            title,
            type,
        });

        return this.repository.save(statement);
    }

    async findAccountBalance({
        idaccount,
        withStatement = false,
    }: IGetBalanceDTO): Promise<
        { balance: number } | { balance: number; statement: Statement[] }
    > {
        const statement = await this.repository.find({
            where: { idaccount },
        });

        const balance = statement.reduce((acc, operation) => {
            if (operation.type === 'deposito') {
                return acc + Number(operation.amount);
            } else {
                return acc - Number(operation.amount);
            }
        }, 0);

        if (withStatement) {
            return {
                statement,
                balance,
            };
        }

        return { balance };
    }

    async findOperation({
        idaccount,
        idstatement,
    }: IGetOperationDTO): Promise<Statement> {
        return await this.repository.findOne(idstatement, {
            where: { idaccount },
            relations: ['account'],
        });
    }
}
