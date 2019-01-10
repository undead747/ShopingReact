import React from 'react';

import Thumb from '../Thumb';
import util from '../../util';


const Product = (props) => {
  const product = props.product;

  // khởi tạo biến đếm số lượng cho sản phẩm, what's a bitch
  product.quantity = 1;

  let formattedPrice = util.formatPrice(product.price, product.currencyId);

  let productInstallment;

  if(!!product.installments) {
    const installmentPrice = util.formatPrice((formattedPrice / product.installments),product.currencyId);

    productInstallment = (
      <div className="installment">
        <span>or {product.installments} x</span>{installmentPrice}&ensp;{product.currencyId}
      </div>
    );
  }

 let freeShip ;

 if(product.isFreeShipping == "true") {
   freeShip = (
     <div class="sizes-wrapper">
        <b>Free Shipping</b>
      </div>
   )
 }

  return (
    <div>
		<div class="col-xs-12 col-sm-6 col-md-4">
			<article class="card-wrapper">
				<div onClick={() => props.addProduct(product)} class="image-holder">
					<div class="image-liquid image-holder--original">
          <img src={require(`../../static/products/${product.sku}_1.jpg`)} />
					</div>
				</div>

				<div class="product-description">

					<h1 class="product-description__title">
          {product.title}
					</h1>


					<div class="row">
						<div class="col-xs-12 col-sm-8 product-description__category secondary-text">
							{product.title}
						</div>
						<div class="col-xs-12 col-sm-4 product-description__price">
							{formattedPrice}&ensp;{product.currencyId}
						</div>
					</div>

          {freeShip}
					<div class="sizes-wrapper">
						<b>Sizes</b>
						<br />
						<span class="secondary-text text-uppercase">
							<ul class="list-inline">
              {
							product.availableSizes.map(p => {
                return (
                  <li>{p},</li>
                )
              })
            }
							</ul>
						</span>
					</div>

					<div class="color-wrapper">
						<b>Colors</b>
						<br />
						<ul class="list-inline color-list">
							<li class="color-list__item color-list__item--red"></li>
							<li class="color-list__item color-list__item--blue"></li>
							<li class="color-list__item color-list__item--green"></li>
							<li class="color-list__item color-list__item--orange"></li>
							<li class="color-list__item color-list__item--purple"></li>
						</ul>
					</div>
				</div>

			</article>
		</div>





</div>
  );
}




export default Product;
