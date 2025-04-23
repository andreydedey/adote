import { prisma } from '../../lib/prisma';
import { GenerateTokenProvider } from '../../provider/generate_token';

export const refresh_token = async (refresh_token: string) => {
  const new_refresh_token = await prisma.refreshToken.findFirst({
    where: {
      id: refresh_token,
    },
  });
  if (!new_refresh_token) {
    throw new Error('Refresh Token invalid!');
  }

  const generateTokenProvider = new GenerateTokenProvider();
  const token = await generateTokenProvider.execute(new_refresh_token.user_id);

  return token;
};
