import { prisma } from '../lib/prisma';

class TagRepository {
  private static instance: TagRepository;

  // Private constructor
  private constructor() {}

  // Access to the unique instance
  public static getInstance(): TagRepository {
    if (!TagRepository.instance) {
      TagRepository.instance = new TagRepository();
    }
    return TagRepository.instance;
  }

  async getAllTags() {
    const tags = await prisma.tag.findMany();
    return tags;
  }
}

export const tagRepository = TagRepository.getInstance();
