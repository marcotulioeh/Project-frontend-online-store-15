import React, { Component } from 'react';
import CartItem from '../../components/CartItem';
import { getFromCartStorage } from '../../services/cartManager';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    this.setState({ cartItems: getFromCartStorage() });
  }

  render() {
    const { cartItems } = this.state;
    return (
      cartItems.length === 0
        ? <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        : cartItems.map((item, key) => (
          <div key={ key }>
            <CartItem id={ item.id } quantity={ item.quantity } />
          </div>
        ))
    );
  }
}
