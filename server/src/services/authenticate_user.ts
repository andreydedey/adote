import { userRepository } from '../repositories/user_repository';

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

  // Implement json web token
};
