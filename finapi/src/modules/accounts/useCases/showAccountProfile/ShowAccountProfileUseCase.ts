import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Account } from '@modules/accounts/typeorm/entities/Account';
import { IAccountRepository } from '@modules/accounts/repositories/IAccountRepository';

@injectable()
export class ShowAccountProfileUseCase {
    constructor(
        @inject('AccountRepository')
        private accountRepository: IAccountRepository
    ) {}

    async execute(idaccount: string): Promise<Account> {
        const account = await this.accountRepository.findById(idaccount);

        if (!account) {
            throw new AppError('Account not Found!', 404);
        }

        return account;
    }
}
