import express from 'express';
import 'dotenv/config';
import { user_router } from './routes/user_routes';
import { env } from './env';
import { pet_router } from './routes/pets_routes';

const app = express();

app.use(express.json());

app.use('/user', user_router);
app.use('/pet', pet_router);

app.listen(env.PORT, () => {
  console.log('O app já está rodando!');
  console.log(`http://localhost:${env.PORT}`);
});
