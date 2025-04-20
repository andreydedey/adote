import type { NextFunction, Request, RequestHandler, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { env } from '../env';

export const ensureAuthenticated: RequestHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authToken = request.headers.authorization;

  if (!authToken) {
    response.status(401).json({
      message: 'Token is missing',
    });
    return;
  }

  const [bearer, token] = authToken.split(' ');

  try {
    verify(token, env.JWT_KEY);

    next();
  } catch (error) {
    response.status(401).json({
      message: 'Token Invalid',
    });
  }
};
