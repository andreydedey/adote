import { Router } from 'express';
import { get_tags } from '../services/tag/get_tags';

export const tag_router = Router();

tag_router.get('/get_tags', async (request, response) => {
  const result = await get_tags();

  response.status(201).json({ tags: result });
});
