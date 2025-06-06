import { z } from 'zod';

export const userRegistrationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email(),
    password: z.string(),
  }),
});
