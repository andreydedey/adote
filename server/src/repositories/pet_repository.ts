import { prisma } from '../lib/prisma';

class PetRepository {
  private static instance: PetRepository;

  // Private constructor
  private constructor() {}

  // Acess to the unique instance
  public static getInstance(): PetRepository {
    if (!PetRepository.instance) {
      PetRepository.instance = new PetRepository();
    }
    return PetRepository.instance;
  }

  async publishPet({
    user_id,
    pet_name,
    city,
    state,
    phonenumber,
    race_id,
    description,
  }: {
    user_id: string;
    pet_name: string;
    city: string;
    state: string;
    phonenumber: string;
    race_id: number;
    description?: string;
  }) {
    const pet = await prisma.pet.create({
      data: {
        user_id,
        pet_name,
        city,
        state,
        phonenumber,
        race_id,
        description,
        tag_id: 1,
      },
    });

    return pet;
  }

  async getUserPets({ user_id }: { user_id: string }) {
    const pets = await prisma.pet.findMany({
      where: {
        user_id: user_id,
      },
    });

    return pets;
  }

  async getPet(pet_id: string) {
    const pet = await prisma.pet.findUnique({
      where: {
        id: pet_id,
      },
    });

    return pet;
  }

  async deletePet(pet_id: string) {
    const pet = await prisma.pet.delete({
      where: {
        id: pet_id,
      },
    });

    return pet;
  }
}

export const petRepository = PetRepository.getInstance();
