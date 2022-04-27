import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductFromId } from '../services/api';

export default class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  async componentDidMount() {
    const { id } = this.props;
    const data = await getProductFromId(id);
    this.setState({
      name: data.title,
    });
  }

  render() {
    const { name } = this.state;
    const { quantity } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{name}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
