import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateStatementUseCase } from './CreateStatementUseCase';
import { OperationType } from '@modules/statements/dtos/OperationType';

export class CreateStatementController {
    async handler(req: Request, res: Response): Promise<Response> {
        const { id: idaccount } = req.account;
        const { title, amount } = req.body;

        const splittedPath = req.originalUrl.split('/');
        const type = splittedPath[splittedPath.length - 1] as OperationType;

        const createStatement = container.resolve(CreateStatementUseCase);

        const statement = await createStatement.execute({
            idaccount,
            title,
            amount,
            type,
        });

        return res.status(201).json(statement);
    }
}
