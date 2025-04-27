import { z } from 'zod';

// Usando o `import.meta.env` do Vite
const envSchema = z.object({
  API_URL: z.string().default(import.meta.env.API_URL || "http://localhost:3333"),
});

export const env = envSchema.parse({});
