import { petRepository } from '../../repositories/pet_repository';

export const get_user_pets = async (user_id: string | undefined) => {
  if (!user_id) {
    return "User ID is missing. Please ensure you're authenticated.";
  }

  try {
    const pets = await petRepository.getUserPets({
      user_id: String(user_id),
    });

    return pets;
  } catch (error) {
    return 'Error fetching user pets. Please try again later.';
  }
};
