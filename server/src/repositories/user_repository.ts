import { PrismaClient } from '@prisma/client/extension';
import { prisma } from '../lib/prisma';

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
  }: { name: string; email: string; password: string }) {
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
