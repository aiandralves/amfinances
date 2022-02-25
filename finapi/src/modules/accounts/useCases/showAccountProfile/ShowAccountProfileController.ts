import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowAccountProfileUseCase } from './ShowAccountProfileUseCase';

export class ShowAccountProfileController {
    async hanlder(req: Request, res: Response): Promise<Response> {
        const { id: idaccount } = req.account;

        const showAccountProfile = container.resolve(ShowAccountProfileUseCase);

        const accountProfile = await showAccountProfile.execute(idaccount);

        return res.status(200).json(accountProfile);
    }
}
