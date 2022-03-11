import { container } from 'tsyringe';

import { IAccountRepository } from '@modules/accounts/repositories/IAccountRepository';
import { AccountRepository } from '@modules/accounts/typeorm/repositories/AccountRepository';
import { IStatementRepository } from '@modules/statements/repositories/IStatementRepository';
import { StatementRepository } from '@modules/statements/typeorm/repositories/StatementRepository';

container.registerSingleton<IAccountRepository>(
    'AccountRepository',
    AccountRepository
);

container.registerSingleton<IStatementRepository>(
    'StatementRepository',
    StatementRepository
);
