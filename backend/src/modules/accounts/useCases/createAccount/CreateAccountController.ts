import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAccountUseCase } from './CreateAccountUseCase';

export class CreateAccountController {
    async handler(req: Request, res: Response): Promise<Response> {
        const { name, cpf, password, avatar } = req.body;

        const createAccount = container.resolve(CreateAccountUseCase);

        const account = await createAccount.execute({
            name,
            cpf,
            password,
            avatar,
        });

        return res.status(201).json(account);
    }
}
