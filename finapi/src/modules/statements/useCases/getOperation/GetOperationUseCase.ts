import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IGetOperationDTO } from '@modules/statements/dtos/IGetOperationDTO';
import { Statement } from '@modules/statements/typeorm/entities/Statement';
import { IStatementRepository } from '@modules/statements/repositories/IStatementRepository';
import { IAccountRepository } from '@modules/accounts/repositories/IAccountRepository';

@injectable()
export class GetOperationUseCase {
    constructor(
        @inject('StatementRepository')
        private statementRepository: IStatementRepository,

        @inject('AccountRepository')
        private accountRepository: IAccountRepository
    ) {}

    async execute({
        idaccount,
        idstatement,
    }: IGetOperationDTO): Promise<Statement | undefined> {
        const account = await this.accountRepository.findById(idaccount);

        if (!account) {
            throw new AppError('Conta não encontrada!', 404);
        }

        const statementOperation = await this.statementRepository.findOperation(
            {
                idaccount,
                idstatement,
            }
        );

        if (!statementOperation) {
            throw new AppError('Extrato não encontrada', 404);
        }

        return statementOperation;
    }
}
