import { IAccountDTO } from '@modules/accounts/dtos/IAccountDTO';
import { Account } from '@modules/accounts/typeorm/entities/Account';

export interface IAccountRepository {
    create(data: IAccountDTO): Promise<Account>;

    findById(id: string): Promise<Account>;

    findByCpf(cpf: string): Promise<Account>;
}
