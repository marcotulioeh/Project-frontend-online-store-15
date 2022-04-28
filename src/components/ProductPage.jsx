import React, { Component } from 'react';
import propTypes from 'prop-types';
import { getProductFromId } from '../services/api';

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
    console.log(id);
    const product = await getProductFromId(id);
    console.log(product);
    this.setState({ productInfo: product, fetchDone: true });
  }

  render() {
    const { productInfo: {
      title,
      pictures,
      permalink,
      base_price: basePrice,
    }, fetchDone } = this.state;
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
