import { Router } from 'express';
import { validate } from '../middleware/validate';
import { userRegistrationSchema } from '../schemas/userSchemas';

export const user_router = Router();

user_router.post(
  '/register',
  validate(userRegistrationSchema),
  async (request, response) => {
    const { name, email, password } = request.body;

    // TODO: register user logic
    response.status(201).json({ message: 'all ok here!' });
  }
);
