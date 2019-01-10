const formatPrice = (x, currency) => {
  switch(currency) {
    case 'VND':
      return x.toFixed(3);
    default:
      return x.toFixed(2);
  }
};

export default {
    formatPrice,
}
