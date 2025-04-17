import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  JWT_KEY: z.coerce.string().default('jwt'),
});

export const env = envSchema.parse(process.env);
