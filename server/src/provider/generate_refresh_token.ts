import { prisma } from '../lib/prisma';
import dayjs from 'dayjs';

export class GenerateRefreshToken {
  async execute(user_id: string) {
    const expiresIn = dayjs().add(15, 'seconds').unix();

    const generateRefreshToken = await prisma.refreshToken.create({
      data: {
        user_id,
        expiresIn,
      },
    });

    return generateRefreshToken;
  }
}
