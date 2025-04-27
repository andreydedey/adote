import { tagRepository } from '../../repositories/tag_repository';

export const get_tags = async () => {
  try {
    const tags = await tagRepository.getAllTags();
    return tags;
  } catch (error) {
    return { error: 'Error retrieving pet. Please try again later.' };
  }
};
