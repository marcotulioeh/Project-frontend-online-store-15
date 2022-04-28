import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductFromId } from '../services/api';
import { saveToCartStorage } from '../services/cartManager';

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: {},
      fetchDone: false,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    // console.log(id);
    const product = await getProductFromId(id);
    // console.log(product);
    this.setState({ productInfo: product, fetchDone: true });
  }

  render() {
    const { productInfo: {
      title,
      pictures,
      permalink,
      base_price: basePrice,
    }, fetchDone } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <section>
        {fetchDone ? (
          <>
            <img src={ pictures[0].url } alt={ title } />
            <ul>
              <li data-testid="product-detail-name">{ title }</li>
              <li>
                Valor: R$
                { basePrice }
              </li>
              <li><a href={ permalink }>Veja o produto</a></li>
            </ul>
            <button
              data-testid="product-detail-add-to-cart"
              type="button"
              onClick={ () => saveToCartStorage(id) }
            >
              Adicionar ao Carrinho
            </button>
            <Link to="/shopingcart" data-testid="shopping-cart-button">
              <input type="button" value="cart" />
            </Link>
          </>
        ) : ''}
      </section>
    );
  }
}
export default ProductPage;
ProductPage.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }).isRequired,
};
