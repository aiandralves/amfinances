import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auth';
import { AppError } from '@shared/errors/AppError';

interface IPayload {
    sub: string;
}

export async function ensureAuth(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const token = req.headers.authorization;

    if (!token) {
        throw new AppError('JWT Token is Missing!', 401);
    }

    try {
        const { sub: idaccount } = verify(
            token,
            authConfig.jwt.secret
        ) as IPayload;

        req.account = {
            id: idaccount,
        };

        next();
    } catch {
        throw new AppError('JWT Token Inválido!', 401);
    }
}
