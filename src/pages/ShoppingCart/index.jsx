import React, { Component } from 'react';
import CartItem from '../../components/CartItem';
// import { getProductFromId } from '../../services/api';
import { getFromCartStorage } from '../../services/cartManager';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cartItemsInfo: [],
      // cartItems: [],
      total: 0,
    };
  }

  componentDidMount() {
    this.setState({ cartItemsInfo: getFromCartStorage() });
  }

  updateCartItemsInfo = () => {
    this.setState({ cartItemsInfo: [] }, () => this.setState(
      { cartItemsInfo: getFromCartStorage() },
    ));
  }

  // fetchItems = () => {
  //   const { cartItemsInfo } = this.state;
  //   const { length } = cartItemsInfo;
  // }

  addValue = (value) => {
    this.setState((previous) => ({ total: previous.total + value }));
  }

  render() {
    const { cartItemsInfo } = this.state;
    return (
      cartItemsInfo.length === 0
        ? <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        : cartItemsInfo.map((item, key) => (
          <CartItem
            key={ key }
            id={ item.id }
            quantity={ item.quantity }
            update={ this.updateCartItemsInfo }
            addValue={ this.addValue }
          />
        ))
    );
  }
}
