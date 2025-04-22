import { userRepository } from '../../repositories/user_repository';
import { petRepository } from '../../repositories/pet_repository';

export const publish_pet = async (data: Record<string, string | number>) => {
  console.log('Received data:', data);

  if (!data.user_id) {
    return "User ID is missing. Please ensure you're authenticated.";
  }

  try {
    const pet = await petRepository.publishPet({
      user_id: String(data.user_id),
      pet_name: String(data.pet_name),
      city: String(data.city),
      state: String(data.state),
      phonenumber: String(data.phonenumber),
      race_id: Number(data.race_id),
      description: data.description ? String(data.description) : undefined,
    });

    return {
      success: true,
      message: 'Pet published successfully',
      pet,
    };
  } catch (error) {
    console.error('Error publishing pet:', error);
    return {
      success: false,
      message: 'Failed to publish pet. Please check the provided data.',
      error: (error as Error).message,
    };
  }
};
