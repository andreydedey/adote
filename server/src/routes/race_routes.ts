import { Router } from 'express';
import { get_races } from '../services/race/get_races';

export const race_router = Router();

race_router.get('/get_races', async (request, response) => {
  const result = await get_races();

  response.status(201).json({ races: result });
});
