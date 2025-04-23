import { sign } from 'jsonwebtoken';
import { env } from '../env';

export class GenerateTokenProvider {
  async execute(user_id: string) {
    const token = sign({}, env.JWT_KEY, {
      subject: user_id,
      expiresIn: '1h',
    });

    return token;
  }
}
