import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loadCart, removeProduct } from '../../actions/floatCartActions';
import { updateCart } from '../../actions/updateCartActions';
import CartProduct from './CartProduct';
import persistentCart from "../../persistentCart";
import util from '../../util';

class FloatCart extends Component {

  state = {
    isOpen: false,
  };
//được goi trước nhất, trước khi render Component
  componentWillMount() {
    this.props.loadCart( JSON.parse(persistentCart().get()) || [] );
  }
// delay exercute
  componentDidMount() {
    setTimeout(() => {
      this.props.updateCart(this.props.cartProducts);
    });
  }

// prop được update và trước khi com được render lại
  componentWillReceiveProps(nextProps) {
// kiem tra xem co su thay doi thi gọi hàm addProduct xử lý
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }

  openFloatCart = () => {
    this.setState({ isOpen: true });
  }

  closeFloatCart = () => {
    this.setState({ isOpen: false });
  }

  //kiểm tra
  addProduct = (product) => {

    const { cartProducts, updateCart } = this.props;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      // nếu đã có sản phẩm rồi thì thay đôi quantity thôi
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });
// nếu chưa có sản phẩm giống thì thêm sản phẩm vào
    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    // gọi action updatecart và mở cửa sổ cart
    updateCart(cartProducts);
    this.openFloatCart();
;  }

  removeProduct = (product) => {
    const { cartProducts, updateCart } = this.props;

    // kiểm tra xem có sản phẩm nào có id giống với sản phẩm trong mảng không, nếu có thì cắt phần tử đó ra khỏi mảng
    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
    // update lại giỏ hàng
      updateCart(cartProducts);
    }
  }

  proceedToCheckout = () => {
    const { totalPrice, productQuantity, currencyFormat, currencyId } = this.props.cartTotals;

    if (!productQuantity) {
      alert("Add some product in the bag!");
    }else {
      alert(`Checkout - Subtotal: ${currencyFormat} ${util.formatPrice(totalPrice, currencyId)}`);
    }
  }

  render() {
    const { cartTotals, cartProducts, removeProduct } = this.props;

    const products = cartProducts.map(p => {
      return (
        <CartProduct
          product={p}
          removeProduct={removeProduct}
          key={p.id}
        />
      );
    });

    let classes = ['float-cart'];

    if (!!this.state.isOpen) {
      classes.push('float-cart--open');
    }

    return (
      <div className={classes.join(' ')}>
        {/* If cart open, show close (x) button */}
        {this.state.isOpen && (
          <div
            onClick={() => this.closeFloatCart()}
            className="float-cart__close-btn"
          >
          X
          </div>
        )}

        {/* If cart is closed, show bag with quantity of product and open cart action */}
        {!this.state.isOpen && (
          <span
            onClick={() => this.openFloatCart()}
            className="bag bag--float-cart-closed"
          >
            <span className="bag__quantity">{cartTotals.productQuantity}</span>
          </span>
        )}

        <div className="float-cart__content">
          <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity">
                {cartTotals.productQuantity}
              </span>
            </span>
            <span className="header-title">Cart</span>
          </div>

          <div className="float-cart__shelf-container">
            {products}
            {!products.length && (
              <p className="shelf-empty">
                Add some product in the bag
              </p>
            )}
          </div>

          <div className="float-cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">
                {`${cartTotals.currencyFormat} ${util.formatPrice(cartTotals.totalPrice, cartTotals.currencyId)}`}
              </p>
              <small className="sub-price__installment">
                {!!cartTotals.installments && (
                  <span>
                    {`OR UP TO ${cartTotals.installments} x ${cartTotals.currencyFormat} ${util.formatPrice(cartTotals.totalPrice / cartTotals.installments, cartTotals.currencyId)}`}
                  </span>
                )}
              </small>
            </div>
            <div onClick={() => this.proceedToCheckout()} className="buy-btn">
              Checkout
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  cartProducts: state.cartProducts.items,
  newProduct: state.cartProducts.itemadd,
  productToRemove: state.cartProducts.itemToRemove,
  cartTotals: state.cartTotals.item,
});

export default connect(mapStateToProps, { loadCart, updateCart, removeProduct})(FloatCart);
