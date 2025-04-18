import type { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { env } from '../env';

export function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: 'Unauthorized',
    });
  }

  const [bearer, token] = authToken.split('');

  verify(token, env.JWT_KEY);
}
