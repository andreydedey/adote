import { userRepository } from '../../repositories/user_repository';
import { sign } from 'jsonwebtoken';
import { env } from '../../env';
import { GenerateRefreshToken } from '../../provider/generate_refresh_token';

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

  const token = sign({}, env.JWT_KEY, {
    subject: user.id,
    expiresIn: '1h',
  });

  const generateRefreshToken = new GenerateRefreshToken();
  const refreshToken = await generateRefreshToken.execute(user.id);

  return { token, refreshToken };
};
