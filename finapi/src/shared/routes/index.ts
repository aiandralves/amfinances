import { Router } from 'express';

import { accountRoutes } from './accounts.routes';
import { authRoutes } from './auth.routes';
import { profileRoutes } from './profile.routes';
import { statementRoutes } from './statements.routes';

export const routes = Router();

routes.use('/account', accountRoutes);
routes.use('/profile', profileRoutes);
routes.use('/', authRoutes);
routes.use('/statement', statementRoutes);
