import { response, Router } from 'express';
import { ensureAuthenticated } from '../middleware/ensure_authentication';
import { publish_pet } from '../services/pet/publish_pet';

export const pet_router = Router();

pet_router.post(
  '/publish_pet',
  ensureAuthenticated,
  async (request, response) => {
    console.log(request);

    const data = {
      user_id: request.user_id,
      ...request.body,
    };

    console.log(request);

    const result = await publish_pet(data);

    response.status(200).json({
      message: result,
    });
  }
);
