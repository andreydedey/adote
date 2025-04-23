import { userRepository } from '../../repositories/user_repository';
import { sign } from 'jsonwebtoken';
import { env } from '../../env';
import { GenerateRefreshTokenProvider } from '../../provider/generate_refresh_token';
import { GenerateTokenProvider } from '../../provider/generate_token';

export const authenticate_user = async ({
  email,
  password,
}: { email: string; password: string }) => {
  const user = await userRepository.getUser({ email });

  if (!user) {
    return "User don't exists";
  }

  if (user.password !== password) {
    return 'Password is incorrect!';
  }

  // generate token
  const generateToken = new GenerateTokenProvider();
  const token = generateToken.execute(user.id);

  // generate refresh token
  const generateRefreshToken = new GenerateRefreshTokenProvider();
  const refreshToken = await generateRefreshToken.execute(user.id);

  return { token, refreshToken };
};
