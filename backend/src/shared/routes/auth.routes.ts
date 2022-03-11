import { Router } from 'express';

import { AuthAccountController } from '@modules/accounts/useCases/authAccount/AuthAccountController';

export const authRoutes = Router();

const authAccount = new AuthAccountController();

authRoutes.post('/sessions', authAccount.handler);
