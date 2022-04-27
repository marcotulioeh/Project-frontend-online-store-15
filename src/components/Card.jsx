import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { saveToCartStorage } from '../services/cartManager';

class Card extends React.Component {
  render() {
    const { title, image, price, id } = this.props;
    return (
      <div data-testid="product">
        <img src={ image } alt={ title } />
        <h3>{ title }</h3>
        <p>
          R$
          {' '}
          { price }
        </p>
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <button
            type="button"
          >
            Ver Produto
          </button>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => saveToCartStorage(id) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
