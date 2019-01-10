import { combineReducers } from 'redux';
import productReducer from './productReducer';
import filterReducer from './filterReducer';
import sortReducer from './sortReducer';
import floatCartReducer from './floatCartReducer';
import updateCartReducer from './updateCartReducer';
import checkfilterReducer from './CheckFilterReducer';

export default combineReducers({
  //load san pham
  products: productReducer,
  // fillter size
  filters: filterReducer,
  // check free ship
  checkfilters: checkfilterReducer,
  //sort gia
  sort: sortReducer,
  
  cartProducts: floatCartReducer,
  cartTotals: updateCartReducer,
});
