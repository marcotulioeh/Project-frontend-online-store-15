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
      thumbnail,
      permalink,
      price,
    }, fetchDone } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <section>
        {fetchDone ? (
          <>
            <img src={ thumbnail } alt={ title } />
            <ul>
              <li data-testid="product-detail-name">{ title }</li>
              <li>
                Valor: R$
                { price }
              </li>
              <li><a href={ permalink }>Veja o produto</a></li>
            </ul>
            <button
              data-testid="product-detail-add-to-cart"
              type="button"
              onClick={ () => saveToCartStorage({ title, image: thumbnail, price, id }) }
            >
              Adicionar ao Carrinho
            </button>
            <Link to="/shoppingcart" data-testid="shopping-cart-button">
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
