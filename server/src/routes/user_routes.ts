import { Router } from 'express';
import { validate } from '../middleware/validate';
import { userRegistrationSchema } from '../schemas/userSchemas';
import { register_user } from '../services/user/register_user';
import { authenticate_user } from '../services/user/authenticate_user';

export const user_router = Router();

user_router.post(
  '/register',
  validate(userRegistrationSchema),
  async (request, response) => {
    const { name, email, password } = request.body;

    const result = register_user({ name, email, password });

    response.status(201).json({ message: result });
  }
);

user_router.post(
  '/authenticate',
  validate(userRegistrationSchema),
  async (request, response) => {
    const { email, password } = request.body;

    const result = await authenticate_user({ email, password });

    response.status(201).json(result);
  }
);
