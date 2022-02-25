import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IStatementDTO } from '@modules/statements/dtos/IStatementDTO';
import { IStatementRepository } from '@modules/statements/repositories/IStatementRepository';
import { IAccountRepository } from '@modules/accounts/repositories/IAccountRepository';

@injectable()
export class CreateStatementUseCase {
    constructor(
        @inject('StatementRepository')
        private statementRepository: IStatementRepository,

        @inject('AccountRepository')
        private accountRepository: IAccountRepository
    ) {}

    async execute({ idaccount, title, amount, type }: IStatementDTO) {
        const account = await this.accountRepository.findById(idaccount);

        if (!account) {
            throw new AppError('Conta não encontrada!', 404);
        }

        if (type === 'saque') {
            const { balance } =
                await this.statementRepository.findAccountBalance({
                    idaccount,
                });

            if (balance < amount) {
                throw new AppError('Saldo Insuficiente!');
            }
        }

        const statement = await this.statementRepository.create({
            idaccount,
            title,
            amount,
            type,
        });

        return statement;
    }
}
