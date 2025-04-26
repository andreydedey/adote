import { raceRepository } from '../../repositories/race_repository';

export const get_races = async () => {
  try {
    const races = await raceRepository.getAllRaces();
    return races;
  } catch (error) {
    return { error: 'Error retrieving pet. Please try again later.' };
  }
};
