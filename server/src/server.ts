import express from 'express';
import 'dotenv/config';
import { user_router } from './routes/user_routes';

const app = express();

app.use('/user', user_router);

app.listen(process.env.PORT, () => {
  console.log('O app já está rodando');
});
