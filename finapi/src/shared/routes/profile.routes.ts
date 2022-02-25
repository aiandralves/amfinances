import { Router } from 'express';

import { ensureAuth } from '../middlewares/ensureAuth';

import { ShowAccountProfileController } from '@modules/accounts/useCases/showAccountProfile/ShowAccountProfileController';

export const profileRoutes = Router();

const showAccountProfile = new ShowAccountProfileController();

profileRoutes.get('/', ensureAuth, showAccountProfile.hanlder);
