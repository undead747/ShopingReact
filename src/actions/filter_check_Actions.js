import {UPDATE_CHECK_FILTER} from './types';

export const checkfilter = (filters) => {
  return {
    type: UPDATE_CHECK_FILTER,
    payload: filters
  }
}
