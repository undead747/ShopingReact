import { FETCH_SHIRTPRODUCTS } from './types';
import axios from 'axios';

const productsAPI = "http://localhost:3000/db";

const compare = {
  'lowestprice': (a, b) => {
    if (a.price < b.price)
      return -1;
    if (a.price > b.price)
      return 1;
    return 0;
  },
  'highestprice': (a, b) => {
    if (a.price > b.price)
      return -1;
    if (a.price < b.price)
      return 1;
    return 0;
  }
}

export const fetchShirtProducts = (filters, sortBy,checkfilter) => dispatch => {

  axios.get(productsAPI)
    .then(res => {
      let { shirtproducts } = res.data;

      if(!!filters && filters.length > 0){
        shirtproducts = shirtproducts.filter( p => filters.find( f => p.availableSizes.find( size => size === f ) ) )
      }

      if(!!sortBy){
        shirtproducts = shirtproducts.sort(compare[sortBy]);
      }

      if(!!checkfilter){
          shirtproducts = shirtproducts.filter( p => p.isFreeShipping === checkfilter);
        }

      return dispatch({
        type: FETCH_SHIRTPRODUCTS,
        payload: shirtproducts
      });

    })
    .catch(err => {
      console.log(err);
      throw new Error('Could not fetch products. Try again later.');
    });
}
