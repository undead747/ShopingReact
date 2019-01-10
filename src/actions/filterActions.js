import { UPDATE_FILTER } from './types';

export const updateFilters = (filters) => {
  return {
     type: UPDATE_FILTER,
     payload: filters,
   };
}
