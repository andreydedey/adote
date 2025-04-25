import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seed() {
  // Create some users
  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'securepassword123',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      password: 'anothersecurepassword',
    },
  });

  // Create some races
  const race1 = await prisma.race.create({
    data: {
      race: 'Golden Retriever',
    },
  });

  const race2 = await prisma.race.create({
    data: {
      race: 'Siamese Cat',
    },
  });

  // Create some tags
  const tag1 = await prisma.tag.create({
    data: {
      status: 'Available',
    },
  });

  const tag2 = await prisma.tag.create({
    data: {
      status: 'Adopted',
    },
  });

  // Create some pets
  const pet1 = await prisma.pet.create({
    data: {
      pet_name: 'Buddy',
      description: 'A friendly golden retriever.',
      city: 'New York',
      state: 'NY',
      phonenumber: '123-456-7890',
      user_id: user1.id,
      race_id: race1.id,
      tag_id: tag1.id,
    },
  });

  const pet2 = await prisma.pet.create({
    data: {
      pet_name: 'Whiskers',
      description: 'A playful Siamese cat.',
      city: 'Los Angeles',
      state: 'CA',
      phonenumber: '987-654-3210',
      user_id: user2.id,
      race_id: race2.id,
      tag_id: tag2.id,
    },
  });

  // Create adoption statuses
  const adoptionStatus1 = await prisma.adoptionStatus.create({
    data: {
      adoption_status: 'For Adoption',
    },
  });

  const adoptionStatus2 = await prisma.adoptionStatus.create({
    data: {
      adoption_status: 'Adopted',
    },
  });

  // Create adoption requests
  await prisma.adoptionRequest.create({
    data: {
      pet_id: pet1.id,
      adoption_id: adoptionStatus1.id,
    },
  });

  await prisma.adoptionRequest.create({
    data: {
      pet_id: pet2.id,
      adoption_id: adoptionStatus2.id,
    },
  });

  console.log('Seeding completed!');
}
