import { Router } from 'express';
import { validate } from '../middleware/validate';
import { userRegistrationSchema } from '../schemas/userSchemas';
import { register_user } from '../services/register_user';

export const user_router = Router();

user_router.post(
  '/register',
  validate(userRegistrationSchema),
  async (request, response) => {
    const { name, email, password } = request.body;

    // TODO: register user logic
    const result = register_user({ name, email, password });
    response.status(201).json({ message: result });
  }
);
