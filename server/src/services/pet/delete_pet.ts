import { petRepository } from '../../repositories/pet_repository';

export const delete_pet = async (user_id: string | undefined, pet_id: string) => {
  if (!pet_id) {
    return { error: 'Pet ID is missing. Please provide a valid pet ID.' };
  }

  if (!user_id) {
    return { error: 'User ID is missing. Please provide a valid user ID.' };
  }

  try {
    const pet = await petRepository.deletePet(pet_id);

    if (!pet) {
      return { error: 'Pet not found.' };
    }

    return pet;
  } catch (error) {
    return { error: 'Error retrieving pet. Please try again later.' };
  }
};
