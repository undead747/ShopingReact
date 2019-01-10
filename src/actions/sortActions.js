import { UPDATE_SORT } from './types';


export const updateSort = (sort) => {
  return{
    type: UPDATE_SORT,
    payload: sort,
  };
}
