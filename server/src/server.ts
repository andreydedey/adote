import express from 'express';
import 'dotenv/config';
import { user_router } from './routes/user_routes';
import { env } from './env';

const app = express();

app.use(express.json());

app.use('/user', user_router);

app.listen(env.PORT, () => {
  console.log('O app já está rodando!');
  console.log(`http://localhost:${env.PORT}`);
});
