import type { user_type } from '../types/user_types';
import { userRepository } from '../repositories/user_repository';

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
  return user;
};
