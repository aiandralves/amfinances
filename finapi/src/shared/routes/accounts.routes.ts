import { Router } from 'express';

import { CreateAccountController } from '@modules/accounts/useCases/createAccount/CreateAccountController';

export const accountRoutes = Router();

const createAccount = new CreateAccountController();

accountRoutes.post('/', createAccount.handler);
