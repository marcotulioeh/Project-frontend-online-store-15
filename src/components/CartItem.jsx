import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductFromId } from '../services/api';
import { changeItemQuantityInCart, removeItemFromCart } from '../services/cartManager';

export default class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    this.fetchItem();
  }

  fetchItem = async () => {
    const { id, addValue } = this.props;
    const data = await getProductFromId(id);
    addValue(data.price);
    this.setState({
      name: data.title,
    }, () => {
    });
  }

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
    const { name } = this.state;
    const { id, quantity } = this.props;
    const INCREASE = true;
    const DECREASE = false;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{name}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
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
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
  addValue: PropTypes.func.isRequired,
};
