import { response, Router } from 'express';
import { ensureAuthenticated } from '../middleware/ensure_authentication';
import { publish_pet } from '../services/pet/publish_pet';
import { get_user_pets } from '../services/pet/get_user_pets';

export const pet_router = Router();

pet_router.post(
  '/publish_pet',
  ensureAuthenticated,
  async (request, response) => {
    const data = {
      user_id: request.user_id,
      ...request.body,
    };

    const result = await publish_pet(data);

    response.status(200).json({
      message: result,
    });
  }
);

pet_router.get('/get_pets', ensureAuthenticated, async (request, response) => {
  const result = await get_user_pets(request.user_id);

  response.status(200).json(result);
});
