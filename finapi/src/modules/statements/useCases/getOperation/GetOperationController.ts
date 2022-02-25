import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetOperationUseCase } from './GetOperationUseCase';

export class GetOperationController {
    async handler(req: Request, res: Response): Promise<Response> {
        const { id: idaccount } = req.account;
        const { idstatement } = req.params;

        const getOperation = container.resolve(GetOperationUseCase);

        const statementOperation = await getOperation.execute({
            idaccount,
            idstatement,
        });

        return res.status(200).json(statementOperation);
    }
}
