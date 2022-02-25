import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Statement } from '@modules/statements/typeorm/entities/Statement';
import { IStatementRepository } from '@modules/statements/repositories/IStatementRepository';
import { IAccountRepository } from '@modules/accounts/repositories/IAccountRepository';

interface IResponse {
    statement: Statement[];
    balance: number;
}

@injectable()
export class GetBalanceUseCase {
    constructor(
        @inject('StatementRepository')
        private statementRepository: IStatementRepository,

        @inject('AccountRepository')
        private accountRepository: IAccountRepository
    ) {}

    async execute(idaccount: string): Promise<IResponse> {
        const account = await this.accountRepository.findById(idaccount);

        if (!account) {
            throw new AppError('Conta não encontrada!', 404);
        }

        const balance = await this.statementRepository.findAccountBalance({
            idaccount,
            withStatement: true,
        });

        return balance as IResponse;
    }
}
