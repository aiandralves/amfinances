import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthAccountUseCase } from './AuthAccountUseCase';

export class AuthAccountController {
    async handler(req: Request, res: Response): Promise<Response> {
        const { cpf, password } = req.body;

        const authAccount = container.resolve(AuthAccountUseCase);

        const token = await authAccount.execute({
            cpf,
            password,
        });

        return res.status(201).json(token);
    }
}
