import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '@config/auth';
import { AppError } from '@shared/errors/AppError';

import { IAccountDTO } from '@modules/accounts/dtos/IAccountDTO';
import { IAccountRepository } from '@modules/accounts/repositories/IAccountRepository';

interface IResponse {
    token: string;
    account: {
        id: string;
        name: string;
        cpf: string;
    };
}

@injectable()
export class AuthAccountUseCase {
    constructor(
        @inject('AccountRepository')
        private accountRepository: IAccountRepository
    ) {}

    async execute({ cpf, password }: IAccountDTO): Promise<IResponse> {
        const account = await this.accountRepository.findByCpf(cpf);

        if (!account) {
            throw new AppError('CPF or Password incorrect!', 401);
        }

        const passwdMatch = await compare(password, account.password);

        if (!passwdMatch) {
            throw new AppError('CPF or Password incorrect!', 401);
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({ account }, secret, {
            subject: account.id,
            expiresIn: expiresIn,
        });

        const tokenRequest: IResponse = {
            token,
            account: {
                id: account.id,
                name: account.name,
                cpf: account.cpf,
            },
        };

        return tokenRequest;
    }
}
