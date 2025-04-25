import type { Request, Response, NextFunction } from 'express';
import type { AnyZodObject } from 'zod';

export const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
      });
      next();
    } catch (error) {
      res.status(400).json(error);
    }
  };
