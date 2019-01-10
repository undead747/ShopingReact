import {UPDATE_CHECK_FILTER} from '../actions/types';
const initialState = {
  items: '',
}
export default function(state = initialState,action){
  switch (action.type) {
    case UPDATE_CHECK_FILTER:
       return {
         ...state,
        items: action.payload
       };
    default:
      return state
  }
}
