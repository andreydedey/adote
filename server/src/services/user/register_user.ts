import { userRepository } from '../../repositories/user_repository';
import { GenerateRefreshTokenProvider } from '../../provider/generate_refresh_token';
import { GenerateTokenProvider } from '../../provider/generate_token';

export const register_user = async ({
  name,
  email,
  password,
}: { name: string; email: string; password: string }) => {
  const existingUser = await userRepository.getUser({ email });

  if (existingUser) {
    return 'User already exists!';
  }

  const user = await userRepository.create_user({ name, email, password });

  // gerar token
  const generateToken = new GenerateTokenProvider();
  const token = await generateToken.execute(user.id);

  // gerar refresh token
  const generateRefreshToken = new GenerateRefreshTokenProvider();
  const refreshToken = await generateRefreshToken.execute(user.id);

  return { token, refreshToken };
};
