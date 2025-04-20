import { response, Router } from 'express';
import { ensureAuthenticated } from '../middleware/Authenticated';

export const pet_router = Router();

pet_router.post(
  '/publish_pet',
  ensureAuthenticated,
  async (request, response) => {
    response.status(200).json({
      message: request.body,
    });
  }
);
