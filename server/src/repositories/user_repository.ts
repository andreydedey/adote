import { PrismaClient } from '@prisma/client/extension';
import { prisma } from '../lib/prisma';
import type { user_type } from '../types/user_types';

class UserRepository {
  private static instance: UserRepository;

  // Private constructor
  private constructor() {}

  // Acess to the unique instance
  public static getInstance(): UserRepository {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository();
    }
    return UserRepository.instance;
  }

  async getUser({ email }: { email: string }) {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  }

  async create_user({
    name,
    email,
    password,
  }: { name: string; email: string; password: string }): Promise<user_type> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }
}

export const userRepository = UserRepository.getInstance();
