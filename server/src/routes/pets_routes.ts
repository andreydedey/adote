import { response, Router } from 'express';
import { ensureAuthenticated } from '../middleware/ensure_authentication';
import { publish_pet } from '../services/pet/publish_pet';
import { get_user_pets } from '../services/pet/get_user_pets';
import { get_pet } from '../services/pet/get_pet';

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

pet_router.get(
  '/get_pet/:pet_id',
  ensureAuthenticated,
  async (request, response) => {
    const user_id = request.user_id;
    const pet_id = request.params.pet_id;

    console.log(request.params);

    const result = await get_pet(user_id, pet_id);

    response.status(200).json(result);
  }
);
