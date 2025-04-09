import { z } from 'zod';

export const userRegistrationSchema = z.object({
  userna: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});
