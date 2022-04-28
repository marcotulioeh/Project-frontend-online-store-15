import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { changeItemQuantityInCart, removeItemFromCart } from '../services/cartManager';

export default class CartItem extends Component {
  cartItemClickHandler = ({ target: { id, value } }) => {
    const { update } = this.props;
    const booleanValue = value === 'true';
    changeItemQuantityInCart(id, booleanValue);
    update();
  }

  removeButtonHandler = ({ target: { id } }) => {
    const { update } = this.props;
    removeItemFromCart(id);
    update();
  }

  render() {
    const { title, image, price, id, quantity } = this.props;
    const INCREASE = true;
    const DECREASE = false;
    return (
      <div>
        <img src={ image } alt="Product" />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <p>{price}</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          id={ id }
          value={ DECREASE }
          onClick={ this.cartItemClickHandler }
        >
          -
        </button>
        <button
          data-testid="product-increase-quantity"
          type="button"
          id={ id }
          value={ INCREASE }
          onClick={ this.cartItemClickHandler }
        >
          +
        </button>
        <button
          type="button"
          id={ id }
          onClick={ this.removeButtonHandler }
        >
          Remover
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
};
