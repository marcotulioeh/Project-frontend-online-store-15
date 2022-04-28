import React, { Component } from 'react';
import CartItem from '../../components/CartItem';
import { getFromCartStorage } from '../../services/cartManager';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cartItemsInfo: [],
      total: 0,
    };
  }

  componentDidMount() {
    this.updateCartItemsInfo();
  }

  updateCartItemsInfo = () => {
    this.setState({ cartItemsInfo: getFromCartStorage() }, () => {
      this.setState((previous) => ({
        total: previous.cartItemsInfo
          .reduce((sum, item) => sum + (item.price * item.quantity), 0),
      }));
    });
  }

  render() {
    const { cartItemsInfo, total } = this.state;
    return (
      <>
        {cartItemsInfo.length === 0
          ? <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
          : cartItemsInfo.map((item, key) => (
            <CartItem
              key={ key }
              title={ item.title }
              image={ item.image }
              price={ item.price }
              id={ item.id }
              quantity={ item.quantity }
              update={ this.updateCartItemsInfo }
              addValue={ this.addValue }
            />
          ))}
        <p>{total}</p>
      </>
    );
  }
}
