import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { env } from './env';
import { user_router } from './routes/user_routes';
import { pet_router } from './routes/pets_routes';
import { race_router } from './routes/race_routes';
import { tag_router } from './routes/tag_routes';
import { seed } from './lib/seed';

const app = express();

app.use(cors())

app.use(express.json());

// seed()

app.use('/user', user_router);
app.use('/pet', pet_router);
app.use('/race', race_router);
app.use('/tag', tag_router);

app.listen(env.PORT, () => {
  console.log('O app já está rodando!');
  console.log(`http://localhost:${env.PORT}`);
});
