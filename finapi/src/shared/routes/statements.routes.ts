import { Router } from 'express';

import { ensureAuth } from '../middlewares/ensureAuth';

import { CreateStatementController } from '@modules/statements/useCases/createStatement/CreateStatementController';
import { GetBalanceController } from '@modules/statements/useCases/getBalance/GetBalanceController';
import { GetOperationController } from '@modules/statements/useCases/getOperation/GetOperationController';

export const statementRoutes = Router();

const createStatement = new CreateStatementController();
const getBalance = new GetBalanceController();
const getOperation = new GetOperationController();

statementRoutes.use(ensureAuth);

statementRoutes.post('/deposito', createStatement.handler);
statementRoutes.post('/saque', createStatement.handler);

statementRoutes.get('/balance', getBalance.handler);
statementRoutes.get('/:idstatement', getOperation.handler);
