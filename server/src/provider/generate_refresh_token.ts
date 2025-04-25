import { prisma } from '../lib/prisma';
import dayjs from 'dayjs';

export class GenerateRefreshTokenProvider {
  async execute(user_id: string) {
    const expiresIn = dayjs().add(24, 'hours').unix();

    const refreshToken = await prisma.refreshToken.findFirst({
      where: {
        user_id: user_id,
      },
    });

    if (refreshToken) {
      return refreshToken;
    }

    const generateRefreshToken = await prisma.refreshToken.create({
      data: {
        user_id,
        expiresIn,
      },
    });

    return generateRefreshToken;
  }
}
