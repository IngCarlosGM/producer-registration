import { type Producer } from '../interfaces/Producer';
import { producers } from './producers';

export const getProducers = async (): Promise<Producer[]> => {
  const result = await producers();
  return result;
};
