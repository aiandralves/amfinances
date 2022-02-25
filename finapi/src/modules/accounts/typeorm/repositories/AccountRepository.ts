import { getRepository, Repository } from 'typeorm';

import { IAccountDTO } from '@modules/accounts/dtos/IAccountDTO';
import { Account } from '../entities/Account';
import { IAccountRepository } from '@modules/accounts/repositories/IAccountRepository';

export class AccountRepository implements IAccountRepository {
    private repository: Repository<Account>;

    constructor() {
        this.repository = getRepository(Account);
    }

    async create({
        name,
        cpf,
        password,
        avatar,
    }: IAccountDTO): Promise<Account> {
        const account = this.repository.create({
            name,
            cpf,
            password,
            avatar,
        });

        return await this.repository.save(account);
    }

    async findById(id: string): Promise<Account> {
        return await this.repository.findOne({ id });
    }

    async findByCpf(cpf: string): Promise<Account> {
        return await this.repository.findOne({ cpf });
    }
}
