import { prisma } from '../lib/prisma';

class RaceRepository {
  private static instance: RaceRepository;

  // Private constructor
  private constructor() {}

  // Access to the unique instance
  public static getInstance(): RaceRepository {
    if (!RaceRepository.instance) {
      RaceRepository.instance = new RaceRepository();
    }
    return RaceRepository.instance;
  }

  async getAllRaces() {
    const races = await prisma.race.findMany();
    return races;
  }

  async getRaceById(race_id: number) {
    const race = await prisma.race.findUnique({
      where: {
        id: race_id,
      },
    });
    return race;
  }
}

export const raceRepository = RaceRepository.getInstance();
