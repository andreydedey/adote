import express from 'express';
import 'dotenv/config';
import { env } from './env';
import { user_router } from './routes/user_routes';
import { pet_router } from './routes/pets_routes';
import { race_router } from './routes/race_routes';

const app = express();

app.use(express.json());

app.use('/user', user_router);
app.use('/pet', pet_router);
app.use('/race', race_router);

app.listen(env.PORT, () => {
  console.log('O app já está rodando!');
  console.log(`http://localhost:${env.PORT}`);
});
