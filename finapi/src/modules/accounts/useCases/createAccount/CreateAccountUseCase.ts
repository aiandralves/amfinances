import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import { AppError } from '@shared/errors/AppError';

import { IAccountDTO } from '@modules/accounts/dtos/IAccountDTO';
import { Account } from '@modules/accounts/typeorm/entities/Account';
import { IAccountRepository } from '@modules/accounts/repositories/IAccountRepository';

@injectable()
export class CreateAccountUseCase {
    constructor(
        @inject('AccountRepository')
        private accountRepository: IAccountRepository
    ) {}

    async execute({
        name,
        cpf,
        password,
        avatar,
    }: IAccountDTO): Promise<Account> {
        const accountExist = await this.accountRepository.findByCpf(cpf);

        if (accountExist) {
            throw new AppError('Já possui uma conta com esse cpf!');
        }

        const passwdHash = await hash(password, 8);

        const account = await this.accountRepository.create({
            name,
            cpf,
            password: passwdHash,
            avatar,
        });

        return account;
    }
}
