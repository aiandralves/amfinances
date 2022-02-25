import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetBalanceUseCase } from './GetBalanceUseCase';

export class GetBalanceController {
    async handler(req: Request, res: Response): Promise<Response> {
        const { id: idaccount } = req.account;

        const getBalance = container.resolve(GetBalanceUseCase);

        const balance = await getBalance.execute(idaccount);

        return res.status(201).json(balance);
    }
}
