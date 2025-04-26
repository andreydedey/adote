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

  async getTagById(tag_id: number) {
    const tag = await prisma.tag.findUnique({
      where: {
        id: tag_id,
      },
    });
    return tag;
  }
}

export const tagRepository = TagRepository.getInstance();
